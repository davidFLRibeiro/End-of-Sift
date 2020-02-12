import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AddNewUser from './AddNewUser/AddNewUser';
import AddShift from './AddShift/AddShift';
import NavBar from './NavBar/NavBar';
import EditShift from './EditShift/EditShift';
import Historic from './Historic/Historic';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/addshift' component={AddShift}></Route>
          <Route exact path='/EditShift' component={EditShift}></Route>
          <Route exact path='/AddNewUser' component={AddNewUser}></Route>
          <Route exact path='/Historic' component={Historic}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
