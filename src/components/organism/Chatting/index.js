import React from 'react';
import './styles.scss';
import HeaderProfile from '@/components/molecules/HeaderProfile';
import InputChat from '@/components/molecules/InputChat';
function Index({ showMsg }) {
  console.log(showMsg);
  return (
    <React.Fragment>
      <div className="chatting">
        <HeaderProfile></HeaderProfile>
        <div className={`chatting-content background--quill-gray `}>
          {showMsg ? (
            <div>Manturp</div>
          ) : (
            <div className="flex flex--align-center flex--justify-center height--100">
              <p>Please select a chat to start messaging</p>
            </div>
          )}
        </div>
        <InputChat></InputChat>
      </div>
    </React.Fragment>
  );
}

export default Index;
