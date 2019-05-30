import actionTypes from "../actionTypes";

const initialState = {
  isGaleriaFotosLoading: true,
  galeriaFotos: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GALERIAFOTOS: {
      return {
        ...state,
        isGaleriaFotosLoading: true,
        galeriaFotos: []
      };
    }
    case actionTypes.GET_GALERIAFOTOS_SUCCESS: {
      return {
        ...state,
        isGaleriaFotosLoading: false,
        galeriaFotos: action.galeriaFotos
      };
    }
    default:
      return state;
  }
}
