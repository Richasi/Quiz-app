import { ADD_TO_LEADERBOARD } from '../types';

export const addToLeaderboard = (name) => (dispatch, getState) => {
  const { correctAnswers, totalQuestions } = getState().quiz;
  const score = (correctAnswers / totalQuestions) * 100;
  const entry = { name, score };
  // Dispatch action to add entry to leaderboard
  dispatch({ type: ADD_TO_LEADERBOARD, payload: entry });
};
