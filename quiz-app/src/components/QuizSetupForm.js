import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchQuizQuestions } from '../store/actions/quizActions';

const QuizSetupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: '',
    numQuestions: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuizQuestions(formData));
    history.push('/quiz');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for quiz setup */}
    </form>
  );
};

export default QuizSetupForm;
