import React, { Component } from 'react';
import shiftContext from '../context/shiftContext';
import './Historic.css';
import { Link, Redirect } from 'react-router-dom';

export class Historic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      shiftEdit: 0
    };
  }
  handleEditShift = e => {
    e.preventDefault();
    this.setState({ redirect: true, shiftEdit: e.target.id });
  };

  static contextType = shiftContext;
  render() {
    console.log(this.context);
    const { shifts = [] } = this.context;
    if (this.state.redirect) {
      return <Redirect to={`/EditShift/${this.state.shiftEdit}`} />;
    }
    return (
      <section className='shift_list'>
        <h1>HISTORIC</h1>
        <ul>
          {shifts.map(shift => (
            <li
              key={shift.id}
              id={shift.id}
              onClick={this.handleEditShift.bind(this)}
            >
              {' '}
              {shift.date_created}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Historic;
