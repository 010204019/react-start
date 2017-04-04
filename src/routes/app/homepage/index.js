import {routefilterChunk} from '../../../util/routeutil';
module.exports = {
  path: 'homepage',
   onEnter: routefilterChunk(),
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../container/HomePage/hompage'))
    }, 'HomePage')
  }
}