import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'; 
import flower from './components/pictues/flower.png'; 

function App() {
  return (
    <div className="App">
    <Login/>
    <img src={flower} className="flower" alt="flower" />
    </div>
  );
}

export default App;
