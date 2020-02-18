import React, { Component } from 'react';
import './AddShift.css';
import shiftContext from '../context/shiftContext';

export class AddShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupping: 0,
      vault_money: 0.0,
      shift_money: 0.0,
      jetwash: 0.0,
      galp_fleet: 0.0,
      local_credit: 0.0,
      affractions: 0.0,
      discout_card: 0.0,
      discount: 0.0,
      intern_consumption: 0.0,
      escapes: 0.0,
      resume: 0.0,
      atm: 0.0,
      visa: 0.0,
      devolutions: 0.0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: value });
  }

  static contextType = shiftContext;
  render() {
    console.log(this.context);
    return (
      <div>
        <header role='banner'>
          <h1>End of Shift</h1>
        </header>
        <form className='form-section'>
          <div className='form-section'>
            <label htmlFor='cupping'>Nº of cupping</label>
            <input
              type='number'
              id='cupping'
              placeholder='nº of cuppings'
              name='cupping'
              onChange={this.handleChange}
              value={this.state.cupping}
            ></input>
            <label htmlFor='vault-money'>Vault money</label>
            <input
              type='number'
              id='vault_money'
              placeholder='vault_money'
              onChange={this.handleChange}
              value={this.state.vault_money}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='shift-money'>Shift money</label>
            <input
              type='number'
              id='shift-money'
              placeholder='shift-money'
              name='shift-money'
              onChange={this.handleChange}
              value={this.state.shift_money}
            ></input>
            <label htmlFor='jetwash'>Jetwash</label>
            <input
              type='number'
              id='jetwash'
              placeholder='jetwash'
              name='jetwash'
              onChange={this.handleChange}
              value={this.state.jetwash}
            ></input>
          </div>
          <h2>Galp Fleet & Local Credit</h2>
          <div className='form-section'>
            <label htmlFor='galp-fleet'>Galp Fleet</label>
            <input
              type='number'
              id='galp-fleet'
              placeholder='galp fleet'
              name='galp-fleet'
              onChange={this.handleChange}
              value={this.state.galp_fleet}
            ></input>
            <label htmlFor='local-credit'>Local Credit</label>
            <input
              type='number'
              id='local-credit'
              placeholder='local-credit'
              name='local-credit'
              onChange={this.handleChange}
              value={this.state.local_credit}
            ></input>
          </div>
          <h2>Sales</h2>
          <div className='form-section'>
            <label htmlFor='affractions'>affractions</label>
            <input
              type='number'
              id='affractions'
              placeholder='affractions'
              name='affractions'
              onChange={this.handleChange}
              value={this.state.affractions}
            ></input>
            <label htmlFor='discount_card'>Discount Card</label>
            <input
              type='number'
              id='discout_card'
              placeholder='discount card'
              name='discount card'
              onChange={this.handleChange}
              state={this.state.discout_card}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='discount'>Discount </label>
            <input
              type='number'
              id='discount'
              placeholder='discount'
              name='discount'
              onChange={this.handleChange}
              value={this.state.discount}
            ></input>
            <label htmlFor='intern-consumption'>Consumption</label>
            <input
              type='number'
              id='intern-consumption'
              placeholder='intern consumption'
              name='intern-consumption'
              onChange={this.handleChange}
              value={this.state.intern_consumption}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='devolutions'>Devolutions</label>
            <input
              type='number'
              id='devolutions'
              placeholder='devolutions'
              name='devolutions'
              onChange={this.handleChange}
              value={this.state.devolutions}
            ></input>
            <label htmlFor='escapes'>Escapes</label>
            <input
              type='escapes'
              id='escapes'
              placeholder='escapes'
              name='escapes'
              onChange={this.handleChange}
              value={this.state.escapes}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='resume'>Genesis resume</label>
            <input
              type='number'
              id='resume'
              placeholder='genesis resume'
              name='resume'
              onChange={this.handleChange}
              value={this.state.resume}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='atm'>ATM</label>
            <input
              type='number'
              id='atm'
              placeholder='atm'
              name='atm'
              onChange={this.handleChange}
              value={this.state.atm}
            ></input>
            <label htmlFor='visa'>VISA</label>
            <input
              type='number'
              id='visa'
              placeholder='visa'
              name='visa'
              onChange={this.handleChange}
              value={this.state.visa}
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
