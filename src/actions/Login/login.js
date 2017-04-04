export const ACT_TYPE_LOGIN_LOGIN = "ACT_TYPE_LOGIN_LOGIN";
//登录
export function login(username,password) {
  return { type: ACT_TYPE_LOGIN_LOGIN, username ,password }
}