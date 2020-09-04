import TokenService from './TokenService';
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
  //
  
}

export default CarApiService;