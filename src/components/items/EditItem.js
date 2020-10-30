import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import {GlobalContext} from "../../context/global/GlobalContext";

class EditItem extends Component {

  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    const oldItem = this.props.items.filter(item => item.id == id)[0];
    this.state = {
      id,
      name: oldItem? oldItem.name: '',
      price: oldItem? oldItem.price:'',
      link: oldItem? oldItem.link:'',
      picture: oldItem? oldItem.picture:'',
      errors: {}
    };
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { id, name, price, link, picture } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (price === '') {
      this.setState({ errors: { email: 'Price is required' } });
      return;
    }

    if (link === '') {
      this.setState({ errors: { link: 'More details Link is required' } });
      return;
    }

    const newItem = {
      id,
      name,
      price,
      link,
      picture
    };


    try {
      dispatch({ type: 'UPDATE_ITEM', payload: newItem });
    } catch (e) {
      console.log('Error: UPDATE failed. ' + e);
    }

    // Clear State
    this.setState({
      id: '',
      name: '',
      price: '',
      link: '',
      picture:'',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { name, price, link, picture, errors } = this.state;

    return (
      <GlobalContext.Consumer>
        {value => {
          const { reducer} = value;
          return (
            <div className="card mb-3">
              <div className="card-header"><b>Edit Item in Wish List</b></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, reducer)}>
                  <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                  />
                  <TextInputGroup
                      label="Price"
                      name="price"
                      type="number"
                      placeholder="Enter Price"
                      value={price+''}
                      onChange={this.onChange}
                      error={errors.price}
                  />
                  <TextInputGroup
                      label="More details link"
                      name="link"
                      type="url"
                      placeholder="Enter URL"
                      value={link}
                      onChange={this.onChange}
                      error={errors.link}
                  />
                  <TextInputGroup
                      label="Item picture"
                      name="picture"
                      type="url"
                      placeholder="Enter URL"
                      value={picture}
                      onChange={this.onChange}
                      error={errors.picture}
                  />
                  <input
                    type="submit"
                    value="Update Item"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

export default EditItem;
