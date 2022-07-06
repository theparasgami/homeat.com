import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore  } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import filterReducer from "./features/Filters/filterSlice"
import App from './App';

const store=configureStore({
  reducer:{
    filters:filterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);

