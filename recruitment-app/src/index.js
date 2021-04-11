import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionCreators from './actions';
import App from './App';
import './index.css';
import allReducers from './reducers';
const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });

const store = createStore(
  allReducers,
  composeEnhancers()
  );

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);
