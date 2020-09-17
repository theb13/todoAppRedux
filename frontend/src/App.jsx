// css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import './App.css';
import Menu from './components/template/Menu';

//Routas
import { BrowserRouter } from 'react-router-dom'
import Router from './config/Routes';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu></Menu>
        <Router />
      </div>
    </BrowserRouter>

  );
}

export default App;
