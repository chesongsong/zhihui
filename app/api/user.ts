import { get, post } from "./base";

// 获取登陆二维码
export const getLoginQrCode = async () => await get('/api/users/loginCode');
// 检查是否可以登陆
export const checkLogin = async (params: any) => await post('/api/users/checkLogin', params);
// 获取用户信息
export const getUserInfo = async () => await get('/api/users/info');