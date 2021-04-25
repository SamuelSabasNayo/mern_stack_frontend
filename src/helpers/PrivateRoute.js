import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { loadUser } from '../actions/auth';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) return <h2>Loading...</h2>;
      if (!auth.token && !auth.isAuthenticated) return <Redirect to="/login" />;
      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loadUser }
)(PrivateRoute);
