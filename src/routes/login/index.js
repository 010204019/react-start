module.exports = {
  path: '/login',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../container/Login/login').default)
    }, 'Login')
  },

}
