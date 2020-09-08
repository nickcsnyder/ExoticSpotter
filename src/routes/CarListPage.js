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

  render() {
    const { carList = [] } = this.context
    return (
      <Section list className='CarListPage'>
        {carList.map(car =>
          <CarList
            key={car.id}
            car={car} />
        )}
      </Section>
    )
  }
}