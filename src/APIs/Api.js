import Config from './ApiConfig';

const headers = {
  "Content-type": "application/x-www-form-urlencoded",
  "Accept": "application/json"
}

export default class Api {

  getJSON(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        // headers: headers
      }).then(res => res.json())
        .catch((error) => {
          reject(error);
        })
        .then((obj) => {
          resolve(obj);
        })
        .done();
    })
  }
}