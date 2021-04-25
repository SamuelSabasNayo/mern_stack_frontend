import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';

export class Header extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    // console.log(this.props.auth.isAuthenticated);

    const authLink = (
      <>
        <h1 className="p-7 flex-initial text-xl w-40">Logout</h1>
      </>
    );

    const guestLink = (
      <h1 className="p-7 flex-initial text-xl w-40">Welcome {}!</h1>
    );

    return (
      <div className="h-20 shadow-lg">
        <nav className="flex">
          <h1 className="p-8 flex-1 w-10">MERN STACK</h1>
          {!isAuthenticated
            ? authLink
            : guestLink}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loadUser }
)(Header);
