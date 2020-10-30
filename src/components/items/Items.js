import React, { Component } from 'react';
import Item from './Item';
import {GlobalContext} from "../../context/global/GlobalContext";

class Items extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          const { items } = value;
          return (
            <React.Fragment>
              <h1 className="display-7 mb-2">
                <span className="text-danger">Wish</span> List
              </h1>
              {items.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </React.Fragment>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

export default Items;
