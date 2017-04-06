import {routefilterChunk} from '../util/routeutil';
import {hashHistory} from 'react-router';
import * as routerUrl from './routeconst';
export const rootRoute = {
  author:"hellow",
  path: '/',
  onEnter: routefilterChunk({callback:()=>{hashHistory.push(routerUrl.URL_HOME_PAGE)}}),
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../container/rootapp'))
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