import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import { rootRoute } from './routes/root'
// import { routesConfig } from './routes/routues'
ReactDOM.render(
  (
    <Router
      history={hashHistory}
      routes={rootRoute}
    />
  )
  ,
  document.getElementById('root')
);
