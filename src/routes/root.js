import {routefilterChunk} from '../util/routeutil';
import {hashHistory} from 'react-router';
import * as routerUrl from './routeconst';
import store from '../store/rootstore';
export const rootRoute = {
  author:"hellow",
  path: '/',
  // onEnter: routefilterChunk({callback:()=>{hashHistory.push(routerUrl.URL_HOME_PAGE)}}),
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../container/rootapp'))
    }, 'RootApp')
  },
  // getIndexRoute(location, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, require('./app/index'))
  //   }, 'App')
  // },
  childRoutes: [
    require('./app/index'),
    require('./login/index'),
    require('./notfound')
  ]
}



/**
 * 
 * rootApp~~~~~~~~[indexroute=App]
 * -------App~~~~~[indexroute=Homepag]
 * ----------Homepage
 * ----------Aboout
 * -------Login
 * 
 * 
 */