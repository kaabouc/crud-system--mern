import axios from './axios';

const getProducts = () => {
  return axios.get('/products');
};

const createProduct = (product) => {
  return axios.post('/products', product);
};

const searchProducts = (query) => {
  return axios.get(`/products/search?query=${query}`);
};

export default {
  getProducts,
  createProduct,
  searchProducts
};
