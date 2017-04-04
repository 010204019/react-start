import {routefilterChunk} from '../../util/routeutil';
module.exports = {
  path: '/rotapp',
  onEnter: routefilterChunk(),
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../container/App/app'))
    }, 'App')
  },
  childRoutes: [
    require('./homepage/index'),
    require('./about/index'),
  ]
}
