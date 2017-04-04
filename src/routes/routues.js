import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';

import RootApp from '../container/rootapp';
// bundle模型用来异步加载组件
import Bundle from '../bundle';

// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
//可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：
/* eslint-disable */
import App from 'bundle-loader?lazy&name=app!../container/App/app';
import HomePage from 'bundle-loader?lazy&name=homepage!../container/HomePage/hompage';
import Login from 'bundle-loader?lazy&name=login!../container/Login/login';
import About from 'bundle-loader?lazy&name=login!../container/About/about';
/* eslint-disable */

//权限验证
var enterRouteCheck = (nextState, replace) => {
  //获取localStorag中的登录权限对象
  /**
   * LOCAL_AUTH ={
   *  loginId:登录ID
   * 
   * }
   */
  console.log(nextState);
  console.log(replace);
  // console.log(localStorage.LOCAL_USER_ID)
  // let loaclUserId = localStorage.LOCAL_USER_ID;
  // console.log(Object.is(loaclUserId, undefined))
  // hashHistory.push("/login");
  if(1==1){
       replace({ pathname: '/login' })
  }

}

function lazyLoadComponent(lazyModule) {  
  return (location, cb) => {
    lazyModule(module => cb(null, module))
  }
}

function lazyLoadComponents(lazyModules) {  
  return (location, cb) => {
    const moduleKeys = Object.keys(lazyModules);
    const promises = moduleKeys.map(key =>
      new Promise(resolve => lazyModules[key](resolve))
    )

    Promise.all(promises).then(modules => {
      cb(null, modules.reduce((obj, module, i) => {
        obj[moduleKeys[i]] = module;
        return obj;
      }, {}))
    })
  }
}
export const routesConfig = <Route path="/" component={RootApp}>
 <IndexRedirect to="/app/homepage" />
  <Route onEnter={enterRouteCheck} path="/app"  getComponent={ lazyLoadComponent(App) }  >
    <Route onEnter={enterRouteCheck}  path="/app/homepage"  getComponent={ lazyLoadComponent(HomePage) } />
    <Route onEnter={enterRouteCheck} path="/app/about"  getComponent={ lazyLoadComponent(About) } />
  </Route>
  <Route path="/login"  getComponent={ lazyLoadComponent(Login)}/>
</Route>;
