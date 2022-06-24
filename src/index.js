import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import { disatch } from './Redux/redux';
import { store as intialStore } from './Redux/redux';
import { Provider } from 'react-redux';
const store = createStore(disatch ,intialStore )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
