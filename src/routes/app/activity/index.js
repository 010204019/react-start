import {routefilterChunk} from '../../../util/routeutil';
module.exports = {
  path: 'activitys',
   onEnter: routefilterChunk(),
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../container/Activity/activitylist'))
    }, 'ActivityList')
  }
}