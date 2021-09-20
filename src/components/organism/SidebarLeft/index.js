import React, { useState } from 'react';
import './styles.scss';
import FriendList from '@/components/molecules/FriendList';
import Search from '@/components/molecules/Search';
import Navbar from '@/components/molecules/Navbar';
import { updateProfile, getUserById } from '@/confiq/redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@/components/atoms/Input';
function Index({ handleShowMsg, backToChat, friends, handleRender, profile, handleNav, isShow }) {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [bio, setBio] = useState(false);
  const [phone, setPhone] = useState(false);
  const [reset, setReset] = useState(false);
  const initialValue = {
    avatar: null,
    bio: '',
    phone_number: '',
    defaultImg: false,
    imagePreview: null,
  };

  const [userProfile, setUserProfile] = React.useState(initialValue);
  const handleChange = (e) => {
    setUserProfile((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  const handleInputFile = (e) => {
    setUserProfile({
      ...userProfile,
      defaultImg: true,
      avatar: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  React.useEffect(() => {
    async function getDatauser() {
      if (userData) {
        await dispatch(getUserById(userData.id));
        await setUserProfile(userData);
        console.log(userProfile);
      }
    }
    getDatauser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, reset]);

  const handleSubmit = async (e, params) => {
    e.preventDefault();
    await dispatch(updateProfile(userProfile));
    (await params) === 'phone' ? setPhone(!phone) : params === 'bio' ? setBio(!bio) : console.log('no target');
    setReset(!reset);
  };
  return (
    <div className={`sidebar-left background--white ${isShow ? '' : 'closed'}`}>
      <Navbar
        backToChat={backToChat}
        handleNav={handleNav}
        username={userProfile?.username}
        handleRender={handleRender}
      />
      {profile && userProfile ? (
        <>
          <div className="profile-wrapper">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="flex flex--column flex--align-center">
                <div className="profile--user">
                  <label htmlFor="profile-user__avatar">
                    <img
                      src={
                        userProfile.defaultImg
                          ? userProfile.imagePreview
                          : userProfile.avatar
                          ? userProfile.avatar
                          : userProfile.avatar
                      }
                      alt="avatar user"
                    ></img>
                    <input type="file" id="profile-user__avatar" name="avatar" onChange={handleInputFile}></input>
                  </label>
                </div>
                <h3 className="mt-3 mb-2">{userProfile.fullname}</h3>
                <p className="text--lighter-black p-0 m-0">@{userProfile.username}</p>
              </div>
              <div>
                <h4>Account</h4>
                {phone ? (
                  <Input
                    name="phone_number"
                    onChange={handleChange}
                    placeholder="change phone number"
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e, 'phone')}
                    className="pl-0"
                  ></Input>
                ) : (
                  <>
                    <p>{userProfile.phone_number}</p>
                    <p className="text--dark-blue cursor--pointer" onClick={() => setPhone(!phone)}>
                      Tap to change phone number
                    </p>
                  </>
                )}
              </div>
              <div>
                <h4>@{userProfile.username}</h4>
                <p className="text--lighter-black">Username</p>
              </div>
              <div>
                {bio ? (
                  <Input
                    name="bio"
                    onChange={handleChange}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e, 'bio')}
                    placeholder="Change bio"
                    className="text--lighter-black"
                  ></Input>
                ) : (
                  <>
                    {console.log('l', userProfile.bio)}
                    <h4>{userProfile.bio}</h4>
                    <p className="text--dark-blue cursor--pointer" onClick={() => setBio(!bio)}>
                      Tap to change bio
                    </p>
                  </>
                )}
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <Search />
          <div className="friends-wrapper">
            {friends &&
              friends.map((friend) => {
                return (
                  <FriendList
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.fullname}
                    onClick={() => handleShowMsg(friend)}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
