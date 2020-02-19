import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AddNewUser from './AddNewUser/AddNewUser';
import AddShift from './AddShift/AddShift';
import NavBar from './NavBar/NavBar';
import EditShift from './EditShift/EditShift';
import Historic from './Historic/Historic';
import config from './config';
import shiftContext from './context/shiftContext';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shifts: []
    };
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}api/shifts`)
      .then(shiftsRes => {
        if (!shiftsRes.ok) return shiftsRes.json().then(e => Promise.reject(e));
        return shiftsRes.json();
      })
      .then(shifts => {
        // console.log(shifts);
        this.setState({ shifts });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    const shiftList = {
      shifts: this.state.shifts
    };
    //console.log(shiftList);
    return (
      <shiftContext.Provider value={shiftList}>
        <Router>
          <div>
            <NavBar />
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/addshift' component={AddShift}></Route>
            <Route
              exact
              path='/EditShift/:shiftId'
              component={EditShift}
            ></Route>
            <Route exact path='/AddNewUser' component={AddNewUser}></Route>
            <Route exact path='/Historic' component={Historic}></Route>
          </div>
        </Router>
      </shiftContext.Provider>
    );
  }
}

export default App;
