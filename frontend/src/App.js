import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  
  return (
    <div className="container">
      <img src={logo} alt="aircnc" className="logo"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
