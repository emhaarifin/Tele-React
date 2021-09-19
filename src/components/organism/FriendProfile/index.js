import React from 'react';
import './styles.scss';
import { backPurple } from '../../../assets/images';

function Index({ handleShowProfileFriend, showFriendProfile, friend }) {
  return (
    friend && (
      <div className={`sidebar-right background--white ${showFriendProfile ? 'profile-friend__closed' : ''}`}>
        <div className="flex flex--column flex--align-center ">
          <div className="flex flex--justify-center mb-2 flex--align-baseline">
            <div className="cursor--pointer" onClick={handleShowProfileFriend}>
              <img src={backPurple} alt="back"></img>
            </div>
            <p className="text--dark-blue p-reset ml-3">@{friend.username}</p>
          </div>
          <div className="profile--user mt-4 mb-2">
            <img src={friend.avatar} alt="friend-avatar"></img>
          </div>
        </div>
        <p className="text--bold ">{friend.fullname}</p>
        <p className="">{friend.socket_id !== '' ? 'Online' : 'Offline'}</p>
        <p className="text--bold ">Phone number</p>
        <p>{friend.phone_number}</p>
        <p className="text--bold">Bio</p>
        <p>{friend.bio}</p>
      </div>
    )
  );
}

export default Index;
