/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from './actions/auth';
import Routes from './components/Routes';

export class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    // console.log(this.props.auth);
    return (
      <Routes />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
