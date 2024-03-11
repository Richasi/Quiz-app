const BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuizQuestionsAPI = async (formData) => {
  const { category, difficulty, numQuestions } = formData;
  const url = `${BASE_URL}?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch quiz questions');
  }

  const data = await response.json();
  return data.results;
};
