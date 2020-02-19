import React, { Component } from 'react';
import './EditShift.css';
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
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleEditChange(e) {
    const value = e.target.value;
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: value });
  }

  handleEditShift = e => {
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
      method: 'PATCH',
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
        this.setState({ shift: [...this.state.shifts, data] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  static contextType = shiftContext;

  render() {
    const { shiftId } = this.props.match.params;
    const shiftdatarray = this.context.shifts.filter(
      shift => shift.id === parseInt(shiftId)
    );

    console.log(this.props.match.params, shiftdatarray[0]);
    return (
      <div>
        <header role='banner'>
          <h1>Edit End of Shift</h1>
        </header>
        <form className='form-section'>
          <div className='form-section'>
            <label htmlFor='cupping'>Nº of cupping</label>
            <input
              type='number'
              id='cupping'
              placeholder='nº of cuppings'
              name='cupping'
              value={shiftdatarray[0].cupping}
              onChange={this.handleEditChange}
            ></input>
            <label htmlFor='vault_money'>Vault Money</label>
            <input
              type='decimal'
              id='vault_money'
              placeholder='vault_money'
              name='vault_money'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].vault_money}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='shift-money'>Shift money</label>
            <input
              type='decimal'
              id='shift_money'
              placeholder='shift_money'
              name='shift_money'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].shift_money}
            ></input>
            <label htmlFor='jetwash'>Jetwash</label>
            <input
              type='decimal'
              id='jetwash'
              placeholder='jetwash'
              name='jetwash'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].jetwash}
            ></input>
          </div>
          <h2>Galp Fleet & Local Credit</h2>
          <div className='form-section'>
            <label htmlFor='galp_fleet'>Galp Fleet</label>
            <input
              type='decimal'
              id='galp_fleet'
              placeholder='galp fleet'
              name='galp_fleet'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].galp_fleet}
            ></input>
            <label htmlFor='local_credit'>Local Credit</label>
            <input
              type='decimal'
              id='local_credit'
              placeholder='local_credit'
              name='local_credit'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].local_credit}
            ></input>
          </div>
          <h2>Sales</h2>
          <div className='form-section'>
            <label htmlFor='affractions'>affractions</label>
            <input
              type='decimal'
              id='affractions'
              placeholder='affractions'
              name='affractions'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].affractions}
            ></input>
            <label htmlFor='discount_card'>Local Credit</label>
            <input
              type='decimal'
              id='discount_card'
              placeholder='discount_card'
              name='discount_card'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].discount_card}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='discount'>Discount</label>
            <input
              type='decimal'
              id='discount'
              placeholder='discount'
              name='discount'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].discount}
            ></input>
            <label htmlFor='intern_consumption'>Consumption</label>
            <input
              type='decimal'
              id='intern_consumption'
              placeholder='intern consumption'
              name='intern_consumption'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].intern_consumption}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='devolutions'>Devolutions</label>
            <input
              type='decimal'
              id='devolutions'
              placeholder='devolutions'
              name='devolutions'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].devolutions}
            ></input>
            <label htmlFor='escapes'>Escapes</label>
            <input
              type='decimal'
              id='escapes'
              placeholder='escapes'
              name='escapes'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].escapes}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='resume_genesis'>Genesis resume</label>
            <input
              type='decimal'
              id='resume_genesis'
              placeholder='genesis resume'
              name='resume_genesis'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].resume_genesis}
            ></input>
          </div>
          <div className='form-section'>
            <label htmlFor='atm'>ATM</label>
            <input
              type='decimal'
              id='atm'
              placeholder='atm'
              name='atm'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].atm}
            ></input>
            <label htmlFor='visa'>VISA</label>
            <input
              type='decimal'
              id='visa'
              placeholder='visa'
              name='visa'
              onChange={this.handleEditChange}
              value={shiftdatarray[0].visa}
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
