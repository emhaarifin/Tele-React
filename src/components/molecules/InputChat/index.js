import React from "react";

import Input from "@components/atoms/Input";
import "./styles.scss";
import { cameraIcon, plusIcon, stickerIcon } from "../../../assets/images";
function Index({ onChange, onSubmit, value, ...props }) {
  return (
    <div className='input-msg background--white flex flex--align-center flex--justify-space-between'>
      <div className='input-msg--content width--100'>
        <Input
          id='send-msg'
          placeholder='Type your message...'
          value={value}
          onSubmit={onSubmit}
          className='width--100  border-radius--15 background--quill-gray input-msg--chat'
          onChange={onChange}
          {...props}
        ></Input>
        <div className='input-msg--icon flex flex--align-center '>
          <div>
            <img src={plusIcon} alt='plus'></img>
          </div>
          <div>
            <img src={stickerIcon} alt='sticker'></img>
          </div>
          <div>
            <img src={cameraIcon} alt='camera'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
