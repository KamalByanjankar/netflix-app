import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginForm from './components/LoginForm/LoginForm';
import LoginScreen from './components/LoginScreen/LoginScreen';
import Profile from './components/Profile/Profile';
import SignupForm from './components/SignupForm/SignupForm';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{user}] = useStateValue(null)

  return (
    <div>
      {
        !user ? (
          <Router>
            <Switch>
              <Route exact path="/">
                <LoginScreen />
              </Route>
              <Route path="/login">
                <LoginForm />              
              </Route>
              <Route path="/signup">
                <SignupForm />
              </Route>
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route path="/home">
                <HomeScreen />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
          
        )
      }
    </div>
  );
}

export default App;