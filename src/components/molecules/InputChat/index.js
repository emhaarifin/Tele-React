import React from 'react';

import Input from '@components/atoms/Input';
import './styles.scss';
import { cameraIcon, plusIcon, stickerIcon } from '../../../assets/images';
function Index() {
  React.useEffect(() => {
    document.getElementById('send-msg').addEventListener('keydown', function (event) {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        console.log(event.target.value);
      }
    });
  }, []);

  return (
    <div className="input-msg background--white flex flex--align-center flex--justify-space-between">
      <div className="input-msg--content width--100">
        <Input
          id="send-msg"
          placeholder="Type your message..."
          className="width--100  border-radius--15 background--quill-gray input-msg--chat"
        ></Input>
        <div className="input-msg--icon flex flex--align-center ">
          <div>
            <img src={plusIcon} alt="plus"></img>
          </div>
          <div>
            <img src={stickerIcon} alt="sticker"></img>
          </div>
          <div>
            <img src={cameraIcon} alt="camera"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
