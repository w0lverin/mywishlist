import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {GlobalContext} from "../../context/global/GlobalContext";

class Item extends Component {
  state = {
    showItemInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      dispatch({ type: 'DELETE_ITEM', payload: id });
    } catch (e) {
      console.log('Error: DELETE failed. ' + e);
    }
  };

  render() {
    const { id, name, price, link, picture } = this.props.item;
    const { showItemInfo } = this.state;

    return (
      <GlobalContext.Consumer>
        {value => {
          const { reducer } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showItemInfo: !this.state.showItemInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, reducer)}
                />
                <Link to={`item/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showItemInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Price: $ {price}</li>
                  <li className="list-group-item"><a target='_blank' href={link} alt='Show more details'>More details..</a></li>
                  <li className="list-group-item"><img src={picture} alt='Preview' width='200px'/></li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
