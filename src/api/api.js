import axios from 'axios';

export const fetchPlayersStatistics = () => {
  return axios.get('http://localhost:5055/api/Chess/GetPlayerWinPercentage');
};

export const postMatch = (data) => {
  return axios.post('http://localhost:5055/api/Chess/AddMatch', data);
};


