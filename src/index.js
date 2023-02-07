import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='padre'>
     <BrowserRouter>
     <Header/>
     <Router/>
     </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
