import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class PageWrapper extends Component {
  componentDidMount() {
    document.title = `Chores EHR - ${this.props.title}`;
  }

  render() {
    const { props } = this;

    return (
      <div>
        <Header />
        <main>{props.children}</main>
      </div>
    );
  }
}
PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PageWrapper;
