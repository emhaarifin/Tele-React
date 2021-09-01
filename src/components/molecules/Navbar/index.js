import React from "react";

import { arrowLeft } from "@/assets/images";
import "./styles.scss";
function Index({ handleRender, backToChat, handleNav, username }) {
  console.log(arrowLeft);
  return (
    <nav className='flex navigation flex--justify-space-between'>
      {handleNav ? (
        <>
          <div className='flex flex--align-center'>
            <div onClick={() => backToChat()}>
              <img src={arrowLeft} alt='arrow back'></img>
            </div>
            <div style={{ alignSelf: "center" }}>
              <p className='p-0 m-0' style={{ alignSelf: "center" }}>
                @{username}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className='text--dark-blue'>Telegram</h3>
          <div className='navigation-menu'>
            <input className='my-toggle' type='checkbox' id='menu-toggle'></input>
            <label className='my-toggle' htmlFor='menu-toggle'>
              ==
            </label>
            <ul className='main-navigation'>
              <li onClick={() => handleRender()}>Setting</li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Index;
