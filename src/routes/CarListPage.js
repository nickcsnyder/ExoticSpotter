import React, { Component } from 'react';
import CarListContext from '../contexts/CarListContext';
import CarApiService from '../services/CarApiService';
import { Section } from '../Utilities/Utilities';
import CarList from '../carlist/carlist';

export default class CarListPage extends Component {
  static contextType = CarListContext

  componentDidMount() {
    this.context.clearError()
    CarApiService.getCars()
      .then(this.context.setCarList)
      .catch(this.context.setError)
  }
  renderCars() {
    const { carList = [] } = this.context
    return carList.map(car =>
      <CarList
        key={car.id}
        car={car} />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='CarListPage'>
        {error
          ? <p className='red'>There was an error</p>
          : this.renderCars()}
      </Section>
    )
  }
}