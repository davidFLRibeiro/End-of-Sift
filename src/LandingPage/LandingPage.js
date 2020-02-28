import React, { Component } from 'react';
import './LandingPage.css';

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className='banner'>
          <h1>End of Shift</h1>
          <h2>Let´s finish your work for today...</h2>
        </div>
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
        </section>
      </div>
    );
  }
}

export default LandingPage;
