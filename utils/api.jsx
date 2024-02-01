// utils/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://658192d63dfdd1b11c43a201.mockapi.io/CRUD',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
