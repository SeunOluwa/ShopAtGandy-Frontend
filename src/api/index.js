import axios from "axios";

const API = axios.create({ baseURL: 'https://shopatgandy.herokuapp.com' });

export const uploadProduct = (newProduct) => API.post('/products/upload', newProduct);
export const fetchProducts = () => API.get('/products');
