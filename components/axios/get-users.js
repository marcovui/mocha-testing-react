import axios from 'axios';
import $ from 'jquery';
const $users = $('#users');

export const getUsers = () =>  {
  return axios.get('http://localhost:3333/api/articles')
    .then((res) => {
      if (res.data.length == 0) {
        $users.innerHTML = 'The list is empty'
      } else {
        $users.innerHTML = res.data.join(',');
      }
    })
    .catch((res) => {
      $users.innerHTML = 'An error occured.'//;
      return Promise.reject(res);
    });
};