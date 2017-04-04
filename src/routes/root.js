import {routefilterChunk} from '../util/routeutil';
import {hashHistory} from 'react-router';
export const rootRoute = {
  author:"hellow",
  path: '/',
  onEnter: routefilterChunk({callback:()=>{console.log("rootRoute");hashHistory.push("/app/homepage")}}),
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