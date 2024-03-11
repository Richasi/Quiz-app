import React from 'react';
import { useSelector } from 'react-redux';

const QuizResult = () => {
  const { correctAnswers, totalQuestions } = useSelector((state) => state.quiz);

  const score = (correctAnswers / totalQuestions) * 100;

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Total Questions: {totalQuestions}</p>
      <p>Score: {score.toFixed(2)}%</p>
    </div>
  );
};

export default QuizResult;
