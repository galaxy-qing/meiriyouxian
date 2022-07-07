// axios.js
import axios from 'axios';
// import config from '../../config'
import { useRouter } from 'vue-router';

export default function () {
  // 1. 发送请求的时候，如果有token，需要附带到请求头中
  const token = localStorage.getItem('token');
  let instance = axios;

  if (token) {
    instance = axios.create({
      // baseURL: config.server,
      headers: {
        authorization: 'Bearer ' + token
      }
    });
  }

  const router = useRouter();
  instance.interceptors.response.use(
    (resp) => {
      // 2. 响应的时候，如果有token，保存token到本地（localstorage）
      if (resp.data.data.token) {
        localStorage.setItem('token', resp.data.data.token);
      }
      // 3. 响应的时候，如果响应的消息码是403（没有token，token失效），在本地删除token
      if (resp.data.code === 403) {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        router.push({ name: 'Login' });
      }
      return resp;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance;
}