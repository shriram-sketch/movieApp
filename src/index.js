import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import store from './assets/Features/store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import './Component/.css1/Movie.css'
const persistor=persistStore(store)
ReactDOM.render(
 <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}

  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
