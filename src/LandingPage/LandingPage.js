import React, { Component } from 'react';
import './LandingPage.css';

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <header role='banner'>
          <h1>End of Shift</h1>
          <h2>Let´s finish your work for today...</h2>
        </header>
        <section>
          <header>
            <h3>Don´t forget the required fields</h3>
          </header>
          <p>
            It´s important to have everything correct so you don´t have errors
            on the end.
          </p>
        </section>
        <section>
          <header>
            <h3>Start End of Shift</h3>
          </header>
          <form class='sign-up form'>
            <div>
              <label htmlFor='username'>User Name</label>
              <input type='text' name='username' id='username' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <button type='submit'>Sign up</button>
          </form>
        </section>
      </div>
    );
  }
}

export default LandingPage;
