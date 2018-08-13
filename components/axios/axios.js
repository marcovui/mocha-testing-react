import axios from 'axios';
/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/
/*
export const getData = (cb) => {
	const vehicles = new XMLHttpRequest();
	vehicles.open('GET', 'http://localhost:9988/api/vehicle');

	vehicles.onreadystatechange = function () {
		if (vehicles.readyState === 4) {
			if (vehicles.status === 200) {
				cb(vehicles.responseText);
			}
		}
	};

	vehicles.send();
};
*/

const BASE_URL = 'http://localhost:9988';

export const getDataVehicles = (cb) => {
	axios.get(`${BASE_URL}/api/vehicle`).then(res => {
		cb(res.data);
	});
}

export const getDataVehicle = (id, cb) => {
	axios.get(`${BASE_URL}/api/vehicle/${id}`).then(res => {
		cb(res.data);
	});
}

export function fetchPost() {
    return axios
      .get('http://awesome.com/posts')
      .then((response) => {
          return response.data;
      })
  }
