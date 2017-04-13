import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import { rootRoute } from './routes/root'
import store from './store/rootstore'
ReactDOM.render(
  (
    <Provider store={store}>
    <Router
      history={hashHistory}
      routes={rootRoute}
    />
    </Provider>
  )
  ,
  document.getElementById('root')
);
