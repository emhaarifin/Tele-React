import React from 'react';

import { arrowLeft } from '@/assets/images';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { menuIcon, settingIcon } from '../../../assets/images';
import { useHistory } from 'react-router-dom';
function Index({ handleRender, backToChat, handleNav, username }) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <nav className="flex navigation flex--align-center flex--justify-space-between">
      {handleNav ? (
        <>
          <div className="flex width--100 flex--align-center mb-4">
            <div onClick={() => backToChat()} style={{ cursor: 'pointer' }}>
              <img src={arrowLeft} alt="arrow back"></img>
            </div>
            <div style={{ margin: '0 auto' }}>
              <h3 className="p-0 m-0 text--dark-blue" style={{ alignSelf: 'center' }}>
                @{username}
              </h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text--dark-blue p-0 m-0">Telegram</h3>
          <div className="navigation-menu height--100">
            <input className="my-toggle" type="checkbox" id="menu-toggle"></input>
            <label className="my-toggle" htmlFor="menu-toggle">
              <img src={menuIcon} alt="menu"></img>
            </label>
            <ul className="main-navigation">
              <li onClick={() => handleRender()} className="item-nav">
                <img src={settingIcon} alt="setting"></img>Setting
              </li>
              <li onClick={() => dispatch({ type: 'LOGOUT' }, history.push('/'))} className="item-nav">
                <img src={settingIcon} alt="setting"></img>Logout
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Index;
