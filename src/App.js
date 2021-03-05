import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';

function App() {
  const user = null

  return (
    <div>
      {
        !user ? (
          <LoginScreen />
        ) : (
          <HomeScreen />
        )
      }
    </div>
  );
}

export default App;