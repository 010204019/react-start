import React from 'react';
import ReactDOM from 'react-dom';
// import App from './container/App/app'
// import HomePage from './container/HomePage/hompage'
// import './index.css';
import { Router, Route, hashHistory, IndexRoute,browserHistory } from 'react-router';
import { rootRoute } from './routes/root'









ReactDOM.render(
  (

    <Router
      history={hashHistory}
      routes={rootRoute}
      />
    /*<Router history={hashHistory}>
      <Route path="/" getComponent={
        (nextState, callback) => {
          require.ensure([], (require) => {
            callback(null, require("./container/App/app").default)
          }, "App")
        }}>
        <IndexRoute getComponent={
        (nextState, callback) => {
          require.ensure([], (require) => {
            callback(null, require("./container/HomePage/hompage").default)
          }, "HomePage")
        }}/>
        <Route path="/homepage" component={HomePage}></Route>

        <Route path="/homepage" component={HomePage}></Route>
      </Route>
    </Router>*/
  )
  ,
  document.getElementById('root')
);
