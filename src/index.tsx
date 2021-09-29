/*
 * @Author: your name
 * @Date: 2021-09-27 22:51:20
 * @LastEditTime: 2021-09-27 23:17:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react_ts_demo_router\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
