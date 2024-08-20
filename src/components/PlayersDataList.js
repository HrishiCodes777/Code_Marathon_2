import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAsync } from '../features/dataSlice';

const PlayersDataList = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load data.</div>;
  }

  return (
    <div className="data-list">
      <table className='players-data'>
        <thead>
            <tr>
              <th>Player Name</th>
              <th>Total Matches Won</th>
              <th>Win Percentage</th>
            </tr>
        </thead>
        <tbody>
            {players.map((player) => (
              <tr>
                <td>{player.fullName}</td>
                <td>{player.totalMatchesWon}</td>
                <td>{player.winPercentage}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersDataList;