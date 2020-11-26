import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/AlcantaraRW',
});

export default api;
