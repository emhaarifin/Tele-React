import React, { useEffect } from 'react';
import { arrowLeft, profileMenu } from '@/assets/images';
import './styles.scss';
function Index({ setIsShow, isShow, handleShowProfileFriend, deleteMessage, ...props }) {
  function dropDownUser() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches('.header__profile-menu')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };
  }, []);
  return (
    <div className="header-profile background--white flex flex--align-center flex--justify-space-between">
      <div className="flex header-profile--content flex--align-center">
        <div className="arrow-left-header">
          <img src={arrowLeft} onClick={() => setIsShow(!isShow)} alt="arrow back"></img>
        </div>
        <div className="flex flex--align-center">
          <div className="mr-4 profile-image ">
            <img src={props.avatar} className="border-radius--20" alt="avatar"></img>
          </div>
          <div className="ml-1 profile-information">
            <p className="text--bold mt-2">{props.fullname}</p>
            <p className="text--dark-blue mt-2">{props.status}</p>
          </div>
        </div>
      </div>
      <div className="position--relative">
        <img
          src={profileMenu}
          className="header__profile-menu cursor--pointer"
          onClick={dropDownUser}
          alt="icon menu profile"
        ></img>
        <div id="myDropdown" className="dropdown-content">
          <div className="dropdown-item">
            <li onClick={handleShowProfileFriend} className="item-nav cursor--pointer">
              Friend profile
            </li>
            <br />
            <li onClick={deleteMessage} className="item-nav cursor--pointer">
              Delete Message
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
