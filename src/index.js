import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { CarListProvider } from './contexts/CarListContext';
import App from './App';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <CarListProvider>
      <App />
    </CarListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
