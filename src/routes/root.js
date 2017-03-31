

export const rootRoute = {
  path: '/',
  onEnter : ()=>{
    console.log(JSON)

    console.log('123--rootRoute--xxxxxx'+localStorage["auth"]);
    localStorage.axxxxxx = {
      "isLogined":true,
      "isLogined1":true,
    }
    console.log(JSON.stringify(  {
      "isLogined":true,
      "isLogined1":true,
    }));
    console.log(localStorage.axxxxxx);
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../container/rootapp').default)
    }, 'RootApp')
  },
  childRoutes: [
    require('./app/index'),
    // require('./a/index'),
  ]
}



/**
 * 
 * rootApp
 * -------App
 * ----------Homepage
 * ----------Aboout
 * -------Login
 * 
 * 
 */