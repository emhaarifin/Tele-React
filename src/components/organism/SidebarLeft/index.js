import React from 'react';
import './styles.scss';
import FriendList from '@/components/molecules/FriendList';

import Search from '@/components/molecules/Search';
function Index({ handleShowMsg }) {
  return (
    <div className={`sidebar-left background--white`}>
      <Search />
      <FriendList onClick={handleShowMsg} />
      <FriendList />
      <FriendList />
    </div>
  );
}

export default Index;
