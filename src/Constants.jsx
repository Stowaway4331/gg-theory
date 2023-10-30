export const apiKey = import.meta.env.VITE_QUIZ_API_KEY;
export const limit = 10;
export const category = 'Linux';
export const difficulty = 'easy';
 
export const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&category=${category}&difficulty=${difficulty}`;