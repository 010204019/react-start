export const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('../container/HomePage/hompage').default)
      }, 'HomePage')
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../container/App/app').default)
    }, 'App')
  },
  childRoutes: [
    require('./homepage/index'),
    require('./about/index'),
  ]
}