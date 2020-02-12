import React, { Component } from 'react';
import './Historic.css';

export class Historic extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Historic</h1>
        </header>
        <table>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>diference</th>
          </tr>
          <tr>
            <td>David Ribeiro</td>
            <td>30-12-2019</td>
            <td>1 euro</td>
          </tr>
          <tr>
            <td>Marisa Mota</td>
            <td>21-09-2019</td>
            <td>2 euros</td>
          </tr>
          <tr>
            <td>Jhon Ribeiro</td>
            <td>01-02-2020</td>
            <td>1 euro</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Historic;
