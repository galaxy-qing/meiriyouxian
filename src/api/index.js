import request from './axios.js';
import config from '../../config';
export default {
  // 登录
  login(params) {
    return request().post(`${config.server}/login`, params);
  },
  // 获取用户列表
  getUserList(params) {
    return request().get(`${config.server}/user/list`, {
      params: params
    });
  },
  // 添加一个用户
  createUser(params) {
    return request().post(`${config.server}/user/`, params);
  },
};