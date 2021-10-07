import React from 'react';

import Skeleton from 'react-loading-skeleton';
function Index({ fill }) {
  return [...Array(fill)].map((e, i) => {
    return (
      <div key={i} className="flex mb-4">
        <Skeleton circle={true} height={60} width={60} />
        <div className="flex  ml-3 width--100 pr-3 flex--justify-center flex--column">
          <Skeleton height={20} />
          <Skeleton height={20} />
        </div>
      </div>
    );
  });
}

export default Index;
