import React from 'react';
import './styles.scss';
import Chatting from '@components/organism/Chatting';
import Sidebar from '@components/organism/SidebarLeft';
import axios from '@/confiq/axiosConfiq';
import { useSelector } from 'react-redux';
import { toastify } from '@/utils';
function Index({ socket }) {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [friends, setFriends] = React.useState([]);
  const [friend, setFriend] = React.useState(null);
  const [showMsg, setShowMsg] = React.useState(false);
  // const [online, setOnline] = React.useState();
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };
  const handleShowMsg = async (params) => {
    const friendData = await params;
    setShowMsg(true);
    setFriend(friendData);
  };
  React.useEffect(() => {
    axios
      .get('/auth/friends', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
        },
      })
      .then((res) => {
        const dataUsers = res.data.result;
        setFriends(dataUsers);
      });
  }, []);
  React.useEffect(() => {
    if (socket && friend) {
      socket.off('private-message');
      socket.on('private-message', (data) => {
        if (data.sender_id === friend.id) {
          setMessages((currentValue) => [...currentValue, data]);
        } else {
          toastify(`Ada pesan dari ${data.senderName} -> ${data.message_body}`);
        }
      });
    }
    scrollToBottom();
  }, [socket, friend]);
  // React.useEffect(() => {
  //   if (socket) {
  //     socket.on('im-on', (data) => {
  //       console.log(data, 'tes dataon');
  //     });
  //   }
  // }, []);

  React.useEffect(() => {
    if (friend) {
      axios
        .get(`/messages/${friend.id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
          },
        })
        .then((res) => {
          const resultMsg = res.data.result;
          setMessages(resultMsg);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [friend]);
  const [profile, setProfile] = React.useState(null);
  const [handleNav, setHandleNav] = React.useState(false);
  const { userData } = useSelector((state) => state.user);
  const handleRender = () => {
    setProfile(userData);
    setHandleNav(!handleNav);
  };
  const backToChat = () => {
    setProfile(null);
    setHandleNav(!handleNav);
  };

  return (
    <div className="flex main-template">
      <Sidebar
        profile={profile}
        backToChat={backToChat}
        handleNav={handleNav}
        handleRender={handleRender}
        handleShowMsg={handleShowMsg}
        friends={friends}
        setFriend={setFriend}
      />
      <Chatting
        showMsg={showMsg}
        friend={friend}
        messagesEndRef={messagesEndRef}
        message={message}
        setMessage={setMessage}
        setMessages={setMessages}
        messages={messages}
        socket={socket}
      />
    </div>
  );
}

export default Index;
