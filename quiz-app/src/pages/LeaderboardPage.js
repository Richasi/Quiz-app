import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToLeaderboard } from '../store/actions/leaderboardActions';

const LeaderboardForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');

  const handleSubmit = () => {
    dispatch(addToLeaderboard(name));
    history.push('/leaderboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaderboardForm;
