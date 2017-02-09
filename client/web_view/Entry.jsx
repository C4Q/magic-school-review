import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../redux/createStore';
import routes from './routes';

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

const renderApp = (CurrentRoute) => {
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={CurrentRoute} />
    </Provider>,
    document.getElementById('root'));
};

renderApp(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;
    renderApp(nextRoutes);
  });
}
