import {
  routefilterChunk,
  routeeWithLoader
} from '../../../util/routeutil';
module.exports = {
  path: 'homepage',
  onEnter: routefilterChunk(),
  getComponent: routeeWithLoader(
    (nextState, cb) => {
      require.ensure([], require => {
        cb(null, require('../../../container/HomePage/hompage'))
      }, 'HomePage')
    })
}