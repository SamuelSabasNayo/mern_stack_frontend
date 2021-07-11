import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    // console.log('submit');
  }

  render() {
    const { firstname, lastname, email, password, confirmPassword } = this.state;
    // console.log(this.state);
    return (
      <div className="w-screen bg-gradient-to-r from-yellow-500 via-red-500 to-indigo-700">
        <div className="w-2/5 mx-auto bg-white relative top-20">
          <h2 className="text-2xl text-center pt-8 font-bold">Register</h2>
          <form
            className="pt-5 w-9/12 mx-auto min-width-20 mb-5"
            onSubmit={this.onSubmit}
          >
            <div className="pb-2">
              <label className="block">First Name</label>
              <input
                type="text"
                className="border-4 mb-1 w-full p-2"
                name="firstname"
                onChange={this.onChange}
                value={firstname}
              />
            </div>
            <div className="pb-2">
              <label className="block">Last Name</label>
              <input
                type="text"
                className="border-4 mb-1 w-full p-2"
                name="lastname"
                onChange={this.onChange}
                value={lastname}
              />
            </div>
            <div className="pb-2">
              <label className="block">Email</label>
              <input
                type="email"
                className="border-4 mb-1 w-full p-2"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="pb-2">
              <label className="block">Password</label>
              <input
                type="password"
                className="border-4 mb-1 w-full p-2"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="pb-2">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                className="border-4 mb-1 w-full p-2"
                name="confirmPassword"
                onChange={this.onChange}
                value={confirmPassword}
              />
            </div>
            <div className="pt-5">
              <button className="bg-yellow-500 w-full p-3 text-xl" type="submit">Register</button>
            </div>
            <div className="mb-40 pt-5 pb-20 text-lg">
              Already have an account?
              {' '}
              <Link to="/login" className="text-indigo-600 underline">Login</Link>
            </div>
            {/* <div className="mb-40 pt-5">
              {' '}
            </div> */}
          </form>
        </div>
        <br />
      </div>
    );
  }
}

export default RegisterPage;
