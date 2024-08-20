import React from 'react';
import DataList from '../components/PlayersDataList';

const PlayersData = () => {
  return (
    <div className='players-data-page'>
      <h2>Player Statistics</h2>
      <DataList />
    </div>
  );
};

export default PlayersData;