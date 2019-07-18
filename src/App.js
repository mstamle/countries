import React from 'react';
import logo from './logo.svg';
import './App.css';

import CountriesContainer from './CountriesContainer/CountriesContainer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountriesContainer/>
      </header>
    </div>
  );
}

export default App;
