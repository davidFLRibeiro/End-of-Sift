import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/AddShift'>Add Shift</Link>
            </li>
            <li>
              <Link to='/Historic'>Historic</Link>
            </li>
            <div class='topnav'>
              <a href='#home' class='active'>
                Logo
              </a>
              <div id='myLinks'>
                <a href='#news'>Home</a>
                <a href='#contact'>Add Shift</a>
                <a href='#about'>Historic</a>
              </div>
              <a href='javascript:void(0);' class='icon' onclick='myFunction()'>
                <i class='fa fa-bars'></i>
              </a>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
