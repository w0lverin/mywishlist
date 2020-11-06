import React, { Component } from 'react';
import Item from './Item';
import {GlobalContext} from "../../context/global/GlobalContext";
import {Link} from "react-router-dom";

class Items extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          const { items } = value;
          return (
            <React.Fragment>
              <div align={'right'} style={{width:'99%', margin:'5px', align:'right'}}>
                <Link to="/item/add" style={{padding:'5px'}} className="btn btn-success btn-lg">
                  <i className="fas fa-plus" /> Add Item
                </Link>
              </div>
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
