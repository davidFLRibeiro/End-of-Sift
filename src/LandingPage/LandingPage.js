import React, { Component } from 'react';
import './LandingPage.css';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landingPage'>
        <div className='banner'>
          <h1>End of Shift</h1>
          <h2>Let´s finish your work for today...</h2>
        </div>
        <section className='txt'>
          <p>
            It´s important to have everything correct so you don´t have errors
            on the end.
          </p>
          <h3>Start End of Shift</h3>
        </section>
      </div>
    );
  }
}

export default LandingPage;
