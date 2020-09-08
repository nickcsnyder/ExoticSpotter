import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-services';


export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/registration'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return <>
    <nav className='Header'>
      <h1>
        <Link
          to='/'>
          Exotic Spotter
          </Link>
      </h1>
      {TokenService.hasAuthToken()
        ? this.renderLoginLink()
        : this.renderLogoutLink()}
    </nav>
    </>
  }
}