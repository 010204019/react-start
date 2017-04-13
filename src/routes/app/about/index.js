import {
  routefilterChunk,
  routeeWithLoader
} from '../../../util/routeutil';
module.exports = {
  path: 'about',
   onEnter: routefilterChunk(),
  getComponent: routeeWithLoader(
    (nextState, cb) => {
      require.ensure([], require => {
        cb(null, require('../../../container/About/about'))
      }, 'About')
    })
}