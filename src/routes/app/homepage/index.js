module.exports = {
  path: 'homepage',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../container/HomePage/hompage').default)
    }, 'HomePage')
  }
}