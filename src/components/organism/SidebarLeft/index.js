import React from 'react';
import './styles.scss';
import FriendList from '@/components/molecules/FriendList';
import Search from '@/components/molecules/Search';
import Navbar from '@/components/molecules/Navbar';
import { updateProfile, getUserById } from '@/confiq/redux/actions/user';
import { useDispatch } from 'react-redux';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
function Index({ handleShowMsg, backToChat, friends, handleRender, profile, handleNav, isShow }) {
  const dispatch = useDispatch();
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
    if (profile) {
      dispatch(getUserById(profile.id));
      setUserProfile({
        avatar: profile.avatar,
        bio: profile.bio,
        phone_number: profile.phone_number,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(userProfile));
  };
  return (
    <div className={`sidebar-left background--white ${isShow ? '' : 'closed'}`}>
      <Navbar backToChat={backToChat} handleNav={handleNav} username={profile?.username} handleRender={handleRender} />
      {profile ? (
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
                          : profile.avatar
                          ? profile.avatar
                          : profile.avatar
                      }
                      alt="avatar user"
                    ></img>
                    <input type="file" id="profile-user__avatar" name="avatar" onChange={handleInputFile}></input>
                  </label>
                </div>
                <h3 className="mt-3 mb-2">{profile.fullname}</h3>
                <p className="text--lighter-black p-0 m-0">@{profile.username}</p>
              </div>
              <div>
                <h4>Account</h4>
                <p>{profile.phone_number}</p>
                <Input name="phone_number" onChange={handleChange} className="pl-0"></Input>
                <p className="text--dark-blue cursor--pointer">Tap to change phone number</p>
              </div>
              <div>
                <h4>@{profile.username}</h4>
                <p className="text--lighter-black">Username</p>
              </div>
              <div>
                <h4>{profile.bio}</h4>
                <Input name="bio" onChange={handleChange} placeholder="Bio" className="text--lighter-black"></Input>
              </div>
              <Button type="sumbit" className="mt-4">
                Edit profile
              </Button>
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
