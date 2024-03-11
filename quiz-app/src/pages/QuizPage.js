import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { submitAnswer } from '../store/actions/quizActions';

const QuizPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState('');
  const { currentQuestion, totalQuestions } = useSelector((state) => state.quiz);

  const handleSubmit = () => {
    dispatch(submitAnswer(selectedOption));
    setSelectedOption('');
    if (currentQuestion === totalQuestions) {
      history.push('/result');
    }
  };

  const handleNext = () => {
    dispatch(submitAnswer(selectedOption));
    setSelectedOption('');
    // Navigate to next question
  };

  return (
    <div>
      <h2>Question {currentQuestion} of {totalQuestions}</h2>
      {/* Display current question and options */}
      <button onClick={handleSubmit}>Submit Answer</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuizPage;
