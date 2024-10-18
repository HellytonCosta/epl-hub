import axios from 'axios';

const apiKey = process.env.FOOTBALL_API_KEY;
const apiUrl = process.env.FOOTBALL_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl, 
  headers: {
    'x-auth-token': apiKey,
    'Content-Type': 'application/json'
  },
});

export { axiosInstance };

