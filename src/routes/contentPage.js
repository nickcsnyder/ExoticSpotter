import React, { Component } from 'react';
import CarListContext from '../contexts/CarListContext';
import CarApiService from '../services/CarApiService';
import { Section } from '../Utilities/Utilities';
import ContentForm from '../contentForm/contentForm';

export default class CarListPage extends Component {
  static contextType = CarListContext

  componentDidMount() {
    this.context.clearError()
    CarApiService.getCars()
      .then(this.context.setContentForm)
      .catch(this.context.setError)
  }

  render() {
    
    return (
      <Section list className='ContentForm'>
        <ContentForm />
      </Section>
    )
  }
}