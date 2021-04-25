import React, { Component } from 'react';
import UserList from '../../users/pages/UserList';

export class Home extends Component {
  render() {
    return (
      <div className="h-screen w-screen bg-gradient-to-r from-yellow-500 via-red-500 to-indigo-700">
        <div className="h-1/2 w-1/3 mx-auto bg-white relative top-40">
          <UserList />
        </div>
      </div>
    );
  }
}

export default Home;
