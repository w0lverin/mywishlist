import React, { Component } from 'react';
import {UserContext, defaultUser} from "./UserContext";

const userContextReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        privileges: action.payload.privileges
      };
    case 'LOAD_USER':
      return defaultUser;
    default:
      return state;
  }
};

export class UserContextProvider extends Component {
  state = {
    name: '',
    role: '',
    privileges: '',
    reducer: action => this.setState(state => userContextReducer(state, action))
  };

  async componentDidMount() {
    this.setState({ name: defaultUser.name,
      role: defaultUser.role,
      privileges: defaultUser.privileges });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
