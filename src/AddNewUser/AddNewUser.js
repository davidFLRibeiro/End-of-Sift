import React, { Component } from 'react';
import './AddNewUser.css';

export class AddNewUser extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Add new user</h1>
        </header>
        <form id='add-user'>
          <div className='form-section'>
            <label htmlFor='new-user'>Username</label>
            <input type='text' name='new-user' id='newuser'></input>
          </div>
          <div className='form-section'>
            <label htmlFor='new-password'>Password</label>
            <input
              type='new-password'
              name='new-password'
              id='password'
            ></input>
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    );
  }
}

export default AddNewUser;
