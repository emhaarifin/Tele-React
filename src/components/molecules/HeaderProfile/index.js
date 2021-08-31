import React from 'react';
import { arrowLeft, profileMenu, user } from '../../../assets/images';
import './styles.scss';
function Index() {
  return (
    <div className="header-profile background--white flex flex--align-center flex--justify-space-between">
      <div className="flex header-profile--content flex--align-center">
        <div>
          <img src={arrowLeft} alt="arrow back"></img>
        </div>
        <div className="profile-image">
          <img src={user} className="border-radius--20" alt="avatar"></img>
        </div>
        <div className="profile-information">
          <p className="text--bold">Mother</p>
          <p className="text--dark-blue">Online</p>
        </div>
      </div>
      <div>
        <img src={profileMenu} alt="icon menu profile"></img>
      </div>
    </div>
  );
}

export default Index;
