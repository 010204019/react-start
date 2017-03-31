var enterRouteCheck =()=>{
  //获取localStorag中的登录权限对象
/**
 * LOCAL_AUTH ={
 *  loginId:登录ID
 * 
 * }
 */
  console.log(localStorage.LOCAL_USER_ID)
  let loaclUserId =localStorage.LOCAL_USER_ID;
 
  //  loaclUserId === undefined ? "" : localStorage.LOCAL_USER_ID;
  // options === undefined ? {} : options;
  // if(typeof(localStorage.LOCAL_AUTH) )
  // let {loginId} = localStorage.LOCAL_AUTH;
  console.log( Object.is(loaclUserId, undefined))

}
export {enterRouteCheck};
export const rootRoute = {
  path: '/',
  onEnter :enterRouteCheck(), 
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../container/rootapp').default)
    }, 'RootApp')
  },
  childRoutes: [
    require('./app/index'),
    // require('./a/index'),
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