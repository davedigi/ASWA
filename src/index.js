import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TransactionReducer from './components/ASWA/store/TransactionReducer';
import counterReducer from './components/ASWA/store/counterSlice';

import './tailwind.css';
import App from './App';
import { Apptest } from './Apptest';

/* export default configureStore({
        reducer: {
          counter: counterReducer,
        },
      });
 */

const rootReducer = combineReducers({
  transaction: TransactionReducer,
  counter: counterReducer
})
const store = configureStore({
  reducer: rootReducer,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <Apptest />,
  document.getElementById('root')
);

