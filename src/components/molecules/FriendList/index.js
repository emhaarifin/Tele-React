import React from "react";
import "./styles.scss";
function Index({ ...props }) {
  return (
    <div className='friend-list cursor--pointer flex flex--align-center mb-4 flex--justify-space-between' {...props}>
      <div className='flex flex--align-center friend-list--profile'>
        <div className='profile-image'>
          <img className='border-radius--20' src={props.avatar} alt='avatar user'></img>
        </div>
        <div className='profile-information'>
          <h5>{props.name}</h5>
          <p className='text--dark-blue'>Why did you do</p>
        </div>
      </div>
      <div className='friend-list--status'>
        <p className='time'>15.13</p>
        <p className='background--dark-blue text--center border-radius--30 text--white p-1'>1</p>
      </div>
    </div>
  );
}

export default Index;
