//request 是我们封装的要给网络请求库
import request from '../utils/request';
import qs from 'qs';
//处理异步操
export async function query(param) {
  return request(`/api/users`);

}
