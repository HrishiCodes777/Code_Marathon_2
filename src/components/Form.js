import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDataAsync } from '../features/dataSlice';

const Form = () => {
  const [inputValue, setInputValue] = useState({matchId:'',player1Id:'',player2Id:'',matchDate:'',matchLevel:'',winnerId:''});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue){
      dispatch(postDataAsync({ name: inputValue }));
      setInputValue({matchId:'',player1Id:'',player2Id:'',matchDate:'',matchLevel:'',winnerId:''});
    }

  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue.matchId}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Match Id"
      />
      <input
        type="number"
        value={inputValue.player1Id}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Player2 Id"
      />
      <input
        type="number"
        value={inputValue.player2Id}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Player2 Id"
      />
      <input
        type="date"
        value={inputValue.matchDate}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Match Date"
      />
      <input
        type="text"
        value={inputValue.matchLevel}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Match Level"
      />
      <input
        type="Winner Id"
        value={inputValue.winnerId}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Winner Id"
      /> 
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

