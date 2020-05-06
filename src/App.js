import React from 'react';
import logo from './logo.svg';
import { Login } from './components/registeration/login'
import { Signup } from './components/registeration/signup'
import { Home } from './components/home/home'
import { Sidebar } from './components/sidebar/sidebar'
import {Header} from './components/header/header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/home" exact component={Sidebar}/>
      </Switch>
    </Router>
  );
}

export default App;
