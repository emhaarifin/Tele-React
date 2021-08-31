import React from 'react';

import Input from '@components/atoms/Input';
import './styles.scss';
import { plusIcon } from '../../../assets/images';
function Index() {
  return (
    <div className="header-profile background--white flex flex--align-center flex--justify-space-between">
      <Input
        placeholder="Type your message..."
        className="width--100 border-radius--15 background--quill-gray input-chat"
      ></Input>
      <div>
        <img src={plusIcon} alt="plus"></img>
      </div>
    </div>
  );
}

export default Index;
