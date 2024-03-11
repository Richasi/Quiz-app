import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from '../types';
import { fetchQuizQuestionsAPI } from '../../utils/api';

export const fetchQuizQuestions = (formData) => async (dispatch) => {
  try {
    const questions = await fetchQuizQuestionsAPI(formData);
    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: questions });
  } catch (error) {
    dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
  }
};
