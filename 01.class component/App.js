import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Navbar title='Github Finder' icon='fa-brands fa-github' /> */}
        <Navbar />
        <div className='container'>
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
