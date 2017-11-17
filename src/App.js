import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_BASE_URL } from './config'

class App extends Component {

  componentDidMount() {
    fetch(`${API_BASE_URL}/test`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
