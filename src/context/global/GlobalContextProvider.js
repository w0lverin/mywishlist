import React, { Component } from 'react';
import {GlobalContext, defaultGlobalData} from './GlobalContext';

const globalContextReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          item => item.id !== action.payload
        )
      };
    case 'ADD_ITEM':
      const newItem = {
        ...action.payload,
        id: state.items[state.items.length-1].id + 1
      };
      return {
        ...state,
        items: [newItem, ...state.items]
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(
          item =>
            item.id == action.payload.id
              ? (item = action.payload)
              : item
        )
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sortType: action.payload.type,
        sortOrder: action.payload.order
      };
    default:
      return state;
  }
};

export class GlobalContextProvider extends Component {
  state = {
    items: [],
    sortType: '',
    sortOrder: '',
    reducer: action => this.setState(state => globalContextReducer(state, action))
  };

  async componentDidMount() {
    this.setState({ items: defaultGlobalData.items,
      sortType: defaultGlobalData.sortType,
      sortOrder: defaultGlobalData.sortOrder });
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}