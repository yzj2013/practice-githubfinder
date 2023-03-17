import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    // const loading = true;
    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    const loading = false;
    if (loading) {
      return <h4>Loading...</h4>;
    }

    const showName = false;

    return (
      <div className='App'>
        <h1>Hello</h1>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName ? name : null}</h1>
        )}
      </div>
    );
  }
}

export default App;
