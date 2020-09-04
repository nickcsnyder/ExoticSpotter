import React, { Component } from 'react';


export default class CarList extends Component {
    render() {
        const { car } = this.props

        return (
            <div>
                <h2 className='CarListed__make'>{car.make}</h2>
                <h2 className='CarListed__model'>{car.model}</h2>
                <p className='CarListed__location'>{car.location}</p>
            </div>
        )
    }
}