import React from 'react';
import Input from '@components/atoms/Input';
import { search } from '@/assets/images';

import './styles.scss';
function index() {
  return (
    <div className="search">
      <img width="19" height="19" className="search-icon" src={search} alt="search-icon"></img>
      <Input
        className="search-input pt-3 pb-3 background--quill-gray pl-5 border-radius--15"
        placeholder="Type your message..."
      />
    </div>
  );
}

export default index;
