import React from 'react';
import Input from '@components/atoms/Input';
import { search } from '@/assets/images';

import './styles.scss';
import { plusIcon } from '../../../assets/images';
function index({ onChange }) {
  return (
    <div className="search">
      <div className="search-content">
        <div className="search-icon flex flex--align-center">
          <img width="22.31" height="22.31" src={search} alt="search-icon"></img>
        </div>
        <Input
          onChange={onChange}
          className="search-input background--quill-gray border-radius--15"
          placeholder="Type your message..."
        />
      </div>
      <div className="add-contact">
        <img src={plusIcon} alt="plus"></img>
      </div>
    </div>
  );
}

export default index;
