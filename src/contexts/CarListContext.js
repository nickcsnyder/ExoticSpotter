import React, { Component } from 'react';

const CarListContext = React.createContext({
  carList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCarList: () => {}
})
export default CarListContext;

export class CarListProvider extends Component {
  state = {
    carList: [],
    error: null
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }
  setCarList = carList => {
    this.setState({ carList })
  }

  render() {
    const value = {
      carList: this.state.carList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCarList: this.setCarList
    }
    return (
      <CarListContext.Provider value={value}>
        {this.props.children}
      </CarListContext.Provider>
    )
  }
}
