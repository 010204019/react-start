import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import { rootRoute } from './routes/root'
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
