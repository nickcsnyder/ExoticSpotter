import React, { Component } from 'react';
import CarListContext from '../contexts/CarListContext';
import CarApiService from '../services/CarApiService';
import { Button, Input, Required } from '../Utilities/Utilities';

export default class ContentForm extends Component {
  static contextType = CarListContext

  handleSubmit = e => {
    e.preventDefault()
    const { content } = this.context
    const { text } = e.target

    CarApiService.addContent(content.id, text.value)
    console.log(content.id)
      .then(this.context.addContent)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }
  render() {
    return (
      <form
        className='ContentForm'
        onSubmit={this.handleSubmit}>
        <div className='Make'>
          <label htmlFor='ContentForm__Make'>
            Make:  <Required />
          </label>
          <Input
            name='Make'
            type='text'
            required
            id='ContentForm__Make'>
          </Input>
        </div>
        <div className='Model'>
          <label htmlFor='ContentForm__Model'>
            Model: <Required />
          </label>
          <Input
            name='Model'
            type='text'
            required
            id='ContentForm__Model'>
          </Input>
        </div>
        <div className='location'>
          <label htmlFor='ContentForm__location'>
            Location: <Required />
          </label>
          <Input
            name='location'
            type='text'
            required
            id='location'>
          </Input>
        </div>
        <Button type='submit'>
          Submit
        </Button>
      </form >
    )
  }
}