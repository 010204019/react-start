export const AUTHORIZED_ROLE_ADMIN = "admin"//权限角色-管理员
export const AUTHORIZED_ROLE_NORMAL = "normal";//权限角色-普通用户

var authorizedObj = {
  "loginToken": "",
  "role": "",//权限认证-角色
  "loginUser": {
    "name": "",
    "loginId": ""
  }
};

//方法获取方法
export function authGetRole() {
  let { role } = Object.assign(authorizedObj, JSON.parse(localStorage.getItem("authorizedObj")));
  return role;
};
export function authGetLoginToken() {
  let { loginToken } = Object.assign(authorizedObj, JSON.parse(localStorage.getItem("authorizedObj")));
  return loginToken;
};
export function authGetLoginUser() {
  let { loginUser } = Object.assign(authorizedObj, JSON.parse(localStorage.getItem("authorizedObj")));
  return loginUser;
};
//方法设置方法
export function authSetRole(roleStr) {
  let result = Object.assign(authorizedObj, 
    JSON.parse(localStorage.getItem("authorizedObj")),
    {role:roleStr}
  );
  localStorage.setItem("authorizedObj",JSON.stringify(result))
};
export function authSetLoginToken(loginTokenStr) {
  let result = Object.assign(authorizedObj, 
    JSON.parse(localStorage.getItem("authorizedObj")),
    {loginToken:loginTokenStr}
  );
  localStorage.setItem("authorizedObj",JSON.stringify(result))
};
export function authSetLoginUser(LoginUser) {
  let result = Object.assign(authorizedObj, 
    JSON.parse(localStorage.getItem("authorizedObj")),
    {loginUser:LoginUser}
  );
  localStorage.setItem("authorizedObj",JSON.stringify(result))
};
