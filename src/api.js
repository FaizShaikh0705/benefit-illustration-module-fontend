import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);
export const fetchPolicies = () => API.get('/policy/policies');
export const calculateBenefits = (data) => API.post('/policy/calculate', data);
