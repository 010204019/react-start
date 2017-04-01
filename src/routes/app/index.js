module.exports = {
  path: '/app',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../container/App/app').default)
    }, 'App')
  },
  indexRoute: {
    getComponent: (nextState, cb) => {
      // Only load if we're logged in
      // if (auth.loggedIn()) {
      return require.ensure([], (require) => {
        cb(null, require('../../container/HomePage/hompage'))
      }, 'Homepage')
      // }

    }
  },
  childRoutes: [
    require('./homepage/index'),
    require('./about/index'),
  ]
}
