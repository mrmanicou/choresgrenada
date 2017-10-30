import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import NoNavCenteredPageWrapper from './NoNavCenteredPageWrapper';

export default class LandingPage extends Component {
  render() {
    return (
      <NoNavCenteredPageWrapper>
        <div className="content has-text-centered">
          <h1>Chores EHR</h1>
          <Link to={routes.DASHBOARD} className="button is-primary">
            Begin
          </Link>
        </div>
      </NoNavCenteredPageWrapper>
    );
  }
}
