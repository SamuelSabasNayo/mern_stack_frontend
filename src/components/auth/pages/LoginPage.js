/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../actions/auth';

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    const { email, password } = this.state;

    if (this.props.isAuthenticated) return <Redirect to="/" />;
    return (
      <div className="h-screen w-screen bg-gradient-to-r from-yellow-500 via-red-500 to-indigo-700">
        <div className="h-1/2 w-1/3 mx-auto bg-white relative top-40">
          <h2 className="text-2xl text-center pt-8 font-bold">Login</h2>
          <form
            className="pt-8 w-9/12 mx-auto min-width-20"
            onSubmit={this.onSubmit}
          >
            <div className="pb-2">
              <label className="block">Email</label>
              <input
                type="email"
                className="border-4 mb-2 w-full p-2"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="pb-2">
              <label className="block">Password</label>
              <input
                type="password"
                className="border-4 mb-2 w-full p-2"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="pt-7">
              <button className="bg-yellow-500 w-full p-4 text-xl" type="submit">Login</button>
            </div>
            <div className="flex w-11/12">
              <div className="flex-1 pt-8">
                Don't have an account?
                {' '}
                <Link to="/register" className="text-indigo-600 underline">Register</Link>
              </div>
              <Link to="/reset-password" className="pt-8 text-indigo-600 underline">Forget your password?</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
