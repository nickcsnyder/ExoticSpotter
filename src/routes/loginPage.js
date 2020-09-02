import React, { Component } from 'react';
import { Section } from '../Utilities/Utilities';
import LoginForm from '../LoginForm/LoginForm';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    }
  }
  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }
  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    )
  }
}
