import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='nav-bar'>
          NavBar
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/AddShift'>Add Shift</Link>
            </li>
            <li>
              <Link to='/EditShift'>Edit Shift</Link>
            </li>
            <li>
              <Link to='/AddNewUser'>Add New User</Link>
            </li>
            <li>
              <Link to='/Historic'>Historic</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
