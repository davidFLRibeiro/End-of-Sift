import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className='menu'>
        <label htmlFor='menu-toggle'>Menu</label>
        <input type='checkbox' id='menu-toggle' />
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/AddShift'>Add Shift</Link>
          </li>
          <li>
            <Link to='/Historic'>Historic</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
