import React from 'react';
import './styles.scss';
import HeaderProfile from '@/components/molecules/HeaderProfile';
import InputChat from '@/components/molecules/InputChat';

function Index({ showMsg, setMessage, socket, setMessages, message, messages, friend }) {
  const submitChat = () => {
    if (socket && message && showMsg) {
      socket.emit(
        'send-message',
        {
          receiver_id: friend.id,
          message_body: message,
        },
        (data) => {
          setMessages((currentValue) => [...currentValue, data]);
        }
      );
      setMessage('');
    }
  };

  const a = (params) => {
    let MyChat = 'my-chat';
    if (params % 2 === 0) {
      MyChat += ' my-chat-2';
    } else {
      MyChat += ' my-chat-1';
    }
    return MyChat;
  };
  const b = (params) => {
    let FriendChat = 'friend-chat';
    if (params % 2 === 0) {
      FriendChat += ' friend-chat-2';
    } else {
      FriendChat += ' friend-chat-1';
    }
    return FriendChat;
  };
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(scrollToBottom, [messages]);
  return (
    <React.Fragment>
      <div className="chatting">
        <div className={`background--quill-gray `}>
          {showMsg && friend ? (
            <React.Fragment>
              <div>
                <HeaderProfile
                  avatar={`${process.env.REACT_APP_API_URL}/${friend.avatar}`}
                  fullname={friend.fullname}
                  status={friend.socket_id !== '' ? 'Online' : 'Offline'}
                ></HeaderProfile>
                <div className="chatting-content">
                  <div className="content-chat">
                    {messages.map((item, index) => (
                      <p key={item.id} className={`chat-item  ${item.sender_id !== friend.id ? a(index) : b(index)} `}>
                        {item.message_body}
                      </p>
                    ))}
                    <div ref={messagesEndRef}></div>
                  </div>
                </div>
                <InputChat
                  value={message}
                  onKeyPress={(e) => e.key === 'Enter' && submitChat()}
                  onChange={(e) => setMessage(e.target.value)}
                ></InputChat>
              </div>
            </React.Fragment>
          ) : (
            <div className=" flex flex--align-center flex--justify-center" style={{ minHeight: '100vh' }}>
              <div>Please select a chat to start messaging</div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
