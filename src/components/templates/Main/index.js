import React from 'react';
import './styles.scss';
import Chatting from '@components/organism/Chatting';
import Sidebar from '@components/organism/SidebarLeft';
function Index(props) {
  // let [checkOpen, setCheckOpen] = React.useState(true);
  // const [leftOpen, setLeftOpen] = React.useState('');
  // const handleShow = () => {
  //   if (checkOpen) {
  //     setLeftOpen('sidebar-left--open');
  //   } else {
  //     setLeftOpen('sidebar-left--close');
  //   }
  // };

  const [showMsg, setShowMsg] = React.useState(false);
  // let [chatting, setChatting] = React.useState(false);
  // const [showChat, setShowChat] = React.useState('');
  const handleShowMsg = () => {
    setShowMsg(true);
    // if (chatting) {
    //   console.log(showChat, leftOpen);
    //   setShowChat('chatting--open');
    //   setCheckOpen(false);
    //   setLeftOpen('sidebar-left--close');
    // } else {
    //   setShowChat('chatting--close');
    //   setCheckOpen(true);
    // }
  };

  return (
    <div className="flex main-template">
      <Sidebar handleShowMsg={handleShowMsg} />
      <Chatting showMsg={showMsg} />
    </div>
  );
}

export default Index;
