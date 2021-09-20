import React from 'react';
import Chatting from '@components/organism/Chatting';
import Sidebar from '@components/organism/SidebarLeft';
import FriendProfile from '@components/organism/FriendProfile';
import axios from '@/confiq/axiosConfiq';
import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../confiq/redux/actions/user';
import { toastify } from '@/utils';
function Index({ socket }) {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [friends, setFriends] = React.useState([]);
  const [friend, setFriend] = React.useState(null);
  const [showMsg, setShowMsg] = React.useState(false);
  const [isShow, setIsShow] = React.useState(true);
  const [showFriendProfile, setShowFriendProfile] = React.useState(true);
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
    setIsShow(!isShow);
  };

  const [refresh, setRefresh] = React.useState(false);
  const handleShowProfileFriend = () => {
    setShowFriendProfile(!showFriendProfile);
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
  }, [friend, refresh]);

  const deleteMessage = () => {
    axios
      .delete(`/messages/${friend.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('KEY_TOKEN')}`,
        },
      })
      .then((res) => {
        setRefresh(!refresh);
        toastify(res?.data?.message || 'Berhasil menghapus pesan');
      })
      .catch((err) => {
        console.log(err.response);
        setRefresh(!refresh);
        toastify('Ada eror');
      });
  };

  const [profile, setProfile] = React.useState(null);
  const [handleNav, setHandleNav] = React.useState(false);
  const { userData } = useSelector((state) => state.user);
  React.useEffect(() => {
    dispatch(getUserById());
  }, [profile]);
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
        isShow={isShow}
        setFriend={setFriend}
      />
      <Chatting
        showMsg={showMsg}
        friend={friend}
        isShow={isShow}
        setIsShow={setIsShow}
        messagesEndRef={messagesEndRef}
        message={message}
        setMessage={setMessage}
        setMessages={setMessages}
        messages={messages}
        deleteMessage={deleteMessage}
        socket={socket}
        handleShowProfileFriend={handleShowProfileFriend}
        showFriendProfile={showFriendProfile}
      />
      <FriendProfile
        friend={friend}
        handleShowProfileFriend={handleShowProfileFriend}
        showFriendProfile={showFriendProfile}
      />
    </div>
  );
}

export default Index;
