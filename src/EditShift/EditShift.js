import React, { Component } from 'react';
import './EditShift.css';

export class AddShift extends Component {
  render() {
    return (
      <div>
        <header role='banner'>
          <h1>Edit End of Shift</h1>
        </header>
        <form className='form-section'>
          <div className='form-section'>
            <label for='cupping'>Nº of cupping</label>
            <input
              type='number'
              id='cupping'
              placeholder='nº of cuppings'
              name='cupping'
            ></input>
            <label for='vault-money'>Vault money</label>
            <input
              type='number'
              id='vault-money'
              placeholder='vault-money'
            ></input>
          </div>
          <div className='form-section'>
            <label for='shift-money'>Shift money</label>
            <input
              type='number'
              id='shift-money'
              placeholder='shift-money'
              name='shift-money'
            ></input>
            <label for='jetwash'>Jetwash</label>
            <input
              type='number'
              id='jetwash'
              placeholder='jetwash'
              name='jetwash'
            ></input>
          </div>
          <h2>Galp Fleet & Local Credit</h2>
          <div className='form-section'>
            <label for='galp-fleet'>Galp Fleet</label>
            <input
              type='number'
              id='galp-fleet'
              placeholder='galp fleet'
              name='galp-fleet'
            ></input>
            <label for='local-credit'>Local Credit</label>
            <input
              type='number'
              id='local-credit'
              placeholder='local-credit'
              name='local-credit'
            ></input>
          </div>
          <h2>Sales</h2>
          <div className='form-section'>
            <label for='affractions'>affractions</label>
            <input
              type='number'
              id='affractions'
              placeholder='affractions'
              name='affractions'
            ></input>
            <label for='discount-card'>Local Credit</label>
            <input
              type='number'
              id='local-credit'
              placeholder='local-credit'
              name='local-credit'
            ></input>
          </div>
          <div className='form-section'>
            <label for='discount'>Discount </label>
            <input
              type='number'
              id='discount'
              placeholder='discount'
              name='discount'
            ></input>
            <label for='intern-consumption'>Consumption</label>
            <input
              type='number'
              id='intern-consumption'
              placeholder='intern consumption'
              name='intern-consumption'
            ></input>
          </div>
          <div className='form-section'>
            <label for='devolutions'>Devolutions</label>
            <input
              type='number'
              id='devolutions'
              placeholder='devolutions'
              name='devolutions'
            ></input>
            <label for='escapes'>Escapes</label>
            <input
              type='escapes'
              id='escapes'
              placeholder='escapes'
              name='escapes'
            ></input>
          </div>
          <div className='form-section'>
            <label for='resume'>Genesis resume</label>
            <input
              type='number'
              id='resume'
              placeholder='genesis resume'
              name='resume'
            ></input>
          </div>
          <div className='form-section'>
            <label for='atm'>ATM</label>
            <input type='number' id='atm' placeholder='atm' name='atm'></input>
            <label for='visa'>VISA</label>
            <input
              type='number'
              id='visa'
              placeholder='visa'
              name='visa'
            ></input>
          </div>
          <div className='form-section'>
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddShift;
