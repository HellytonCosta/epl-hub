import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.football-data.org/v4/competitions/PL', 
  headers: {
    'x-auth-token': `f66c03af1ad643e0bc10ad9610310bbc`,
    'Content-Type': 'application/json'
  },
});

export { axiosInstance };

