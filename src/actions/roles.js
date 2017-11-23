const axios = require('axios');

export const LOAD_ROLES = 'LOAD_ROLES';
export const ADD_ROLE = 'ADD_ROLE';

export const loadRoles = () => {
  return function(dispatch){
    return axios.get('/api/roles')
    .then( roles => {
      dispatch({
        type: LOAD_ROLES,
        roles: roles.data
      });
    });
  }
}

export const addRole = () => {
  return function(dispatch){
    return axios.post('/api/roles')
    .then( role => {
      dispatch({
        type: ADD_ROLE,
        role: role.data
      });
    });
  }
}