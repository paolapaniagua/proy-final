import axios from 'axios';
import actionTypes from "./actionTypes";
import { API_ENDPOINT_BASE } from '../constants';

export const getRecipes = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_RECIPES
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/recipes`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_RECIPES_SUCCESS,
         recipes: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_RECIPES_ERROR,
         error: error.response
       });
     });
  }
};

export const getRecipesById = (id) => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_RECIPES
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/recipes/${id}`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_RECIPES_SUCCESS,
         recipes: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_RECIPES_ERROR,
         error: error.response
       });
     });
  }
};

export const getChefs = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_CHEFS
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/chefs`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_CHEFS_SUCCESS,
         chefs: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_CHEFS_ERROR,
         error: error.response
       });
     });
  }
};

export const getGallery = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_GALLERIES
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/galleries`)
     .then(response => {
       // Dispatch success!
       console.log(response.data);
       dispatch({
         type: actionTypes.GET_GALLERIES_SUCCESS,
         galleries: response.data
       }
       );
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_GALLERIES_ERROR,
         error: error.response
       });
     });
  }
};

export const getGaleriaFotos = () => {
  return dispatch => {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.
    dispatch({
     type: actionTypes.GET_GALERIAFOTOS
   });

   // Then we attempt the login
   return axios.get(`${API_ENDPOINT_BASE}/galleries`)
     .then(response => {
       // Dispatch success!
       dispatch({
         type: actionTypes.GET_GALERIAFOTOS_SUCCESS,
         galeriaFotos: response.data
       });
     })
     .catch(error => {
       // Dispatch failure!
       dispatch({
         type: actionTypes.GET_GALERIAFOTOS_ERROR,
         error: error.response
       });
     });
  }
};
