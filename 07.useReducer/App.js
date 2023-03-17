import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import User from './components/users/User';

import Alert from './components/layout/Alert';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import axios from 'axios';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            {/* <Navbar title='Github Finder' icon='fa-brands fa-github' /> */}
            <Navbar />
            <div className='container'>
              <Alert></Alert>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/user/:login' component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
