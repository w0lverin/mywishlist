import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import list from '../../images/santa2.png';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img width='100px' src={list} alt="Wish List 4 Santa" />
          <b>{branding}</b>
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/item/add" className="nav-link">
                <i className="fas fa-plus" /> Add Item
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                <i className="fas fa-user-circle" /> View User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;