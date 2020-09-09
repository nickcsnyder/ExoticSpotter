import TokenService from './token-services';
import config from '../config';

const CarApiService = {
  getCars() {
    return fetch(`${config.API_ENDPOINT}/carlist`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCar(carId) {
    return fetch(`${config.API_ENDPOINT}/carlist/${carId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject())
          : res.json()
      )
  },

  postCar(carId, text) {
    return fetch(`${config.API_ENDPOINT}/carlist`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        carId: carId,
        text
      }),
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  }
}

export default CarApiService;