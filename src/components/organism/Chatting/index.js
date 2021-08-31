import React from 'react';
import './styles.scss';
import HeaderProfile from '@/components/molecules/HeaderProfile';
import InputChat from '@/components/molecules/InputChat';
function Index({ showMsg }) {
  console.log(showMsg);
  return (
    <React.Fragment>
      <div className="chatting">
        <div className={`background--quill-gray `}>
          {showMsg ? (
            <React.Fragment>
              <div>
                <HeaderProfile></HeaderProfile>
                <div className="chatting-content">Manturp</div>
                <InputChat></InputChat>
              </div>
            </React.Fragment>
          ) : (
            <div className=" flex flex--align-center flex--justify-center" style={{ height: '100vh' }}>
              <div>Please select a chat to start messaging</div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
