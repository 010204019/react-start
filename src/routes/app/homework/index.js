import {
  routefilterChunk,
  routeeWithLoader
} from '../../../util/routeutil';

module.exports = {
  path: 'homeworks',
  onEnter: routefilterChunk(),
  getComponent: routeeWithLoader(
    (nextState, cb) => {
      require.ensure([], require => {
        cb(null, require('../../../container/HomeWork/homeworklist'))
      }, 'HomeWorkList')
    })
}