import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { store, first, second } from './Apps/InitialRedux';
import { AdminInfo, AuthInfo } from './Apps/AdminInfo';
import { Provider } from 'react-redux';
import ExpensePage from './components/expense/ExpensePage';

console.log(store);

const jsx = (
  <Provider store={store}>
    <ExpensePage/>
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
