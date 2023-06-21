import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '744f4785ad0ebe557b19d33ed17bf758',
    kabgyageL: 'ko-KR',
  },
});

export default instance;
