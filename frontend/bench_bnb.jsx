import React from 'react';
import ReactDOM from 'react-dom';

import { login } from './actions/session_actions';

import Root from './components/Root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login();

  ReactDOM.render(<Root store={store}/>, root);
});
