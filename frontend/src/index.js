import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from "react-redux"
import "./utils/axiosInterceptor";
import reportWebVitals from './reportWebVitals';
import Offline from './components/404ErrorPage/Offline';

const root = ReactDOM.createRoot(document.getElementById('root'));

const online = navigator.onLine;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {!online ? <Offline /> : <App />}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
