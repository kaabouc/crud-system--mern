import axios from './axios';

const getCategories = () => {
  return axios.get('/categories');
};

const createCategory = (category) => {
  return axios.post('/categories', category);
};

export default {
  getCategories,
  createCategory
};
