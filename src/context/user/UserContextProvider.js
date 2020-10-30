import React, { Component } from 'react';
import {UserContext, defaultUser} from "./UserContext";

const userContextReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        isAdmin: action.payload.isAdmin
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
    isAdmin: false,
    reducer: action => this.setState(state => userContextReducer(state, action))
  };

  async componentDidMount() {
    this.setState({ name: defaultUser.name,
      role: defaultUser.role,
      isAdmin: defaultUser.isAdmin });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
