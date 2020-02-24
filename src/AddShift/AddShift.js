import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AddShift.css';
import shiftContext from '../context/shiftContext';
import config from '../config';

export class AddShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupping: 0.0,
      vault_money: 0.0,
      shift_money: 0.0,
      jetwash: 0.0,
      galp_fleet: 0.0,
      local_credit: 0.0,
      affractions: 0.0,
      discount_card: 0.0,
      discount: 0.0,
      intern_consumption: 0.0,
      escapes: 0.0,
      resume_genesis: 0.0,
      atm: 0.0,
      visa: 0.0,
      devolutions: 0.0,

      shifts: []
    };
    this.handleAddShift = this.handleAddShift.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    //console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: value });
  }

  handleAddShift = e => {
    e.preventDefault();

    const shift = {
      cupping: this.state.cupping,
      vault_money: this.state.vault_money,
      shift_money: this.state.shift_money,
      jetwash: this.state.jetwash,
      galp_fleet: this.state.galp_fleet,
      local_credit: this.state.local_credit,
      affractions: this.state.affractions,
      discount_card: this.state.discount_card,
      discount: this.state.discount,
      intern_consumption: this.state.intern_consumption,
      escapes: this.state.escapes,
      resume_genesis: this.state.resume_genesis,
      atm: this.state.atm,
      visa: this.state.visa,
      devolutions: this.state.devolutions
    };
    fetch(`${config.API_ENDPOINT}api/shifts`, {
      method: 'POST',
      body: JSON.stringify(shift),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(data => {
        this.setState(shifts => {
          const updateShift = this.state.shifts.push(data);
          return {
            updateShift
          };
        });
        this.props.history.push('/Historic');
      })
      .catch(error => {
        console.log(error);
      });
  };

  static contextType = shiftContext;
  render() {
    //console.log(this.context);
    return (
      <div>
        <div className='banner'>
          <h1>End of Shift</h1>
        </div>
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
            <label htmlFor='vault_money'>Vault Money</label>
            <input
              type='number'
              id='vault_money'
              placeholder='vault_money'
              name='vault_money'
              onChange={this.handleChange}
              value={this.state.vault_money}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='shift_money'>Shift money</label>
            <input
              type='number'
              id='shift_money'
              placeholder='shift_money'
              name='shift_money'
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
            <label htmlFor='galp_fleet'>Galp Fleet</label>
            <input
              type='number'
              id='galp_fleet'
              placeholder='galp fleet'
              name='galp_fleet'
              onChange={this.handleChange}
              value={this.state.galp_fleet}
            ></input>
            <label htmlFor='local_credit'>Local Credit</label>
            <input
              type='number'
              id='local_credit'
              placeholder='local_credit'
              name='local_credit'
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
              id='discount_card'
              placeholder='discount_card'
              name='discount_card'
              onChange={this.handleChange}
              value={this.state.discount_card}
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
            <label htmlFor='intern_consumption'>Consumption</label>
            <input
              type='number'
              id='intern_consumption'
              placeholder='intern consumption'
              name='intern_consumption'
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
            <label htmlFor='resume_genesis'>Genesis resume</label>
            <input
              type='number'
              id='resume_genesis'
              placeholder='resume_genesis'
              name='resume_genesis'
              onChange={this.handleChange}
              value={this.state.resume_genesis}
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
            <button type='buttoun' onClick={this.handleAddShift}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddShift;
