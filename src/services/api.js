import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.8:8080/'
});
export default api;