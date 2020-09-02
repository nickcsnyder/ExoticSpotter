import React, { Component } from 'react';
import CarListContext from '../contexts/CarListContext';
import CarApiService from '../services/CarApiService';
import Section from '../Utilities/Utilities';


export default class CarListPage extends Component {
  static contextType = CarListContext

  componentDidMount() {
    this.context.clearError()
    CarApiService.getCars()
      .then(this.context.setCarList)
      .catch(this.context.setError)
  }
  // renderCars() {
  //   const { carList = [] } = this.context
  //   return carList.map(car =>
  //     // <CarListItem
  //     //   key={car.id}
  //     //   car={car} />
  //   )
  // }

  render() {
  const { error } = this.context
  return (
    <Section list className='CarListPage'>
      {error
        ? <p className='red'>There was a problem</p>
        : this.renderCars()}
    </Section>
  )
}
}