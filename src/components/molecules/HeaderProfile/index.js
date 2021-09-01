import React from 'react';
import { arrowLeft, profileMenu } from '@/assets/images';
import './styles.scss';
function Index(props) {
  return (
    <div className="header-profile background--white flex flex--align-center flex--justify-space-between">
      <div className="flex header-profile--content flex--align-center">
        <div className="arrow-left-header">
          <img src={arrowLeft} alt="arrow back"></img>
        </div>
        <div className="profile-image">
          <img src={props.avatar} className="border-radius--20" alt="avatar"></img>
        </div>
        <div className="profile-information">
          <p className="text--bold">{props.fullname}</p>
          <p className="text--dark-blue">{props.status}</p>
        </div>
      </div>
      <div>
        <img src={profileMenu} alt="icon menu profile"></img>
      </div>
    </div>
  );
}

export default Index;
