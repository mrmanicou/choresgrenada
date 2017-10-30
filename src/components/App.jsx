import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth, storageKey } from '../fire';

// components
import PrivateRoute from './PrivateRoute';
import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import DashboardPage from './DashboardPage';
// import BrowsePatientsPage from './Patients/BrowsePatientsPage';

class App extends Component {
  componentDidMount() {
    const { sessionStore } = this.props;
    this.removeAuthListener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        window.localStorage.setItem(storageKey, authUser.uid);
        sessionStore.setAuthUser(authUser);
      } else {
        window.localStorage.removeItem(storageKey);
        sessionStore.setAuthUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    return (
      <div>
        <Switch className="App">
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <PrivateRoute exact path={routes.DASHBOARD} component={DashboardPage} />
          {/* <PrivateRoute exact path={routes.PATIENTS} component={BrowsePatientsPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
