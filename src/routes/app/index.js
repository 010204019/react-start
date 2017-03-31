module.exports = {
  path: '/app',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../container/App/app.jsx').default)
    }, 'App')
  },
  childRoutes: [
    require('./homepage/index'),
    require('./about/index'),
  ]
}
