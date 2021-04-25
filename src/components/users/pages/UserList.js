import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listUsers } from '../../../actions/users';

export class UserList extends Component {
  componentDidMount() {
    this.props.listUsers();
  }

  render() {
    const allUsers = this.props.users.data;

    return (
      <>
        <div className="">
          <h2 className="text-2xl text-center pt-8 font-bold">Users</h2>
          <div className="w-9/12 mx-auto pt-3">
            {allUsers === undefined
              ? <div className="text-center">Loading...</div>
              : allUsers.map((user) => (
                <div className="border-b-2 border-gray-500 pt-3" key={user.id}>
                  <div>Name: {user.firstname} {user.lastname}</div>
                  <div>Email: {user.email}</div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userList.users
});

export default connect(
  mapStateToProps,
  { listUsers }
)(UserList);
