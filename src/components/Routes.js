import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../helpers/PrivateRoute';
import Header from '../layouts/Header';
import LoginPage from './auth/pages/LoginPage';
import RegisterPage from './auth/pages/RegisterPage';
import Home from './home/pages/Home';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
