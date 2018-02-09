import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Navbar from './navbar/Navbar';
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar searchText="search" />
      </div>
    );
  }
}

export default App;
