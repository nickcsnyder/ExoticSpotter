import React, { Component } from 'react';
import { Button, Input, Required } from '../Utilities/Utilities';

export default class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }
  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { user_name, full_name, password } = e.target;

    user_name.value = ''
    full_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User Name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full Name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
                </Button>
      </form >
    )
  }
}
