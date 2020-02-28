import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Jokes</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </nav>

        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
