import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, SUBMIT_ANSWER } from '../types';

const initialState = {
  questions: [],
  currentQuestion: 1,
  totalQuestions: 0,
  correctAnswers: 0,
  loading: false,
  error: null
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        totalQuestions: action.payload.length,
        loading: false,
        error: null
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SUBMIT_ANSWER:
      // Update correctAnswers based on submitted answer
      return {
        ...state,
        correctAnswers: action.payload === state.questions[state.currentQuestion - 1].correct_answer ? state.correctAnswers + 1 : state.correctAnswers,
        currentQuestion: state.currentQuestion + 1
      };
    default:
      return state;
  }
};

export default quizReducer;
