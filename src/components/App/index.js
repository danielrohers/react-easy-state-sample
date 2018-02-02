import React, { Component } from 'react';
import './index.css';
import Counter from '../Counter';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Easy State</h1>
        </header>

        <Counter />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Index;
