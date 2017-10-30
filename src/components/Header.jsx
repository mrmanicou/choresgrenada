import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';

class Header extends Component {
  state = {
    isActive: false,
  };

  signOut = () => {};

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  renderLeftMenu = () => (
    <div className="navbar-start">
      <NavLink activeClassName="is-active" to={routes.DASHBOARD} className="navbar-item">
        Dashboard
      </NavLink>
      <NavLink activeClassName="is-active" to={routes.PATIENTS} className="navbar-item">
        Patients
      </NavLink>
    </div>
  );

  renderRightMenu = () => (
    <div className="navbar-end">
      <div className="navbar-item">
        <a className="button is-small is-primary" onClick={this.signOut}>
          <span className="icon">
            <i className="fa fa-sign-out" />
          </span>
          <span>Sign Out</span>
        </a>
      </div>
    </div>
  );

  render() {
    const activeClass = this.state.isActive ? 'is-active' : '';
    return (
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to={routes.DASHBOARD}>Chores EHR</Link>
          </div>
          <button className={`button navbar-burger ${activeClass}`} onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`navbar-menu ${activeClass}`}>
          {this.renderLeftMenu()}
          {this.renderRightMenu()}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {};

export default withRouter(Header);
