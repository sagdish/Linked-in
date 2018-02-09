import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {
  state = {
    icons: [
      { id: 1, text: 'Home' },
      { id: 2, text: 'Network' },
      { id: 3, text: 'Jobs' },
      { id: 4, text: 'Messaging' },
      { id: 5, text: 'Notifications' },
    ],
  };
  
  render() {
    
    const icons = this.state.icons.map(icon => {
      return (
        <li key={icon.id}>
          <img src="" alt="" />
          <div>{icon.text}</div>
        </li>
      );
    });
    
    
    return (
      <div className="navbar">
        <div className = "nav-btn-search">
          <button className="btn-logo">in</button>
          <form className="search-form">
          <input type={this.props.searchText} placeholder="Search" />
          </form>
        </div>
        <ul className="nav-icons" >{icons}</ul>
      </div>
    )
  }
}

export default Navbar;