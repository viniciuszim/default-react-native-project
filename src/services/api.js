import axios from 'axios';

import env from '../../env';

const api = axios.create({
  baseURL: __DEV__
    ? `http://${env.USER_HOST}:${env.USER_PORT}/project/rest`
    : 'https://www.project.com/rest',
});

export default api;
