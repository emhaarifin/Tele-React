import React from 'react';
import './styles.scss';
import FriendList from '@/components/molecules/FriendList';
import Search from '@/components/molecules/Search';
import Navbar from '@/components/molecules/Navbar';

function Index({ handleShowMsg, backToChat, friends, handleRender, profile, handleNav }) {
  return (
    <div className={`sidebar-left background--white`}>
      <Navbar backToChat={backToChat} handleNav={handleNav} username={profile?.username} handleRender={handleRender} />
      {profile ? (
        <>
          <div className="profile-wrapper">
            <div className="flex flex--column flex--align-center">
              <div className="profile--user">
                <img src={`${process.env.REACT_APP_API_URL}/${profile.avatar}`} alt="avatar user"></img>
              </div>
              <h3 className="mt-3 mb-2">{profile.fullname}</h3>
              <p className="text--lighter-black p-0 m-0">@{profile.username}</p>
            </div>
            <div>
              <h4>Account</h4>
              <p>{profile.phone_number ? profile.phone_number : 'Silahkan tambah nomor ponsel'}</p>
              <p className="text--dark-blue" onClick={() => console.log('a', profile)}>
                Tap to change phone number
              </p>
            </div>
            <div>
              <h4>@{profile.username}</h4>
              <p className="text--lighter-black">Username</p>
            </div>
            <div>
              <h4>{profile.bio}</h4>
              <p className="text--lighter-black">Bio</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Search />
          {friends &&
            friends.map((friend) => {
              return (
                <FriendList
                  key={friend.id}
                  avatar={`${process.env.REACT_APP_API_URL}/${friend.avatar}`}
                  name={friend.fullname}
                  onClick={() => handleShowMsg(friend)}
                />
              );
            })}
        </>
      )}
    </div>
  );
}

export default Index;
