import { hashHistory } from 'react-router';
var enterRouteCheck = () => {
  //获取localStorag中的登录权限对象
  /**
   * LOCAL_AUTH ={
   *  loginId:登录ID
   * 
   * }
   */
  console.log(localStorage.LOCAL_USER_ID)
  let loaclUserId = localStorage.LOCAL_USER_ID;
  console.log(Object.is(loaclUserId, undefined))
   hashHistory.push("/login");

}
export {
  enterRouteCheck
};
export const rootRoute = {
  path: '/',
  onEnter: enterRouteCheck(),
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../container/rootapp').default)
    }, 'RootApp')
  },
  childRoutes: [
    require('./app/index'),
    require('./login/index'),
  ]
}



/**
 * 
 * rootApp
 * -------App
 * ----------Homepage
 * ----------Aboout
 * -------Login
 * 
 * 
 */