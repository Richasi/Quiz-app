import { ADD_TO_LEADERBOARD } from '../types';

const initialState = [];

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LEADERBOARD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default leaderboardReducer;
