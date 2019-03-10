import { 
    HOME,
    FUNCTIONS_AND_LIMIT, 
    DERIVATIVES_OF_FUNCTIONS, 
    USE_OF_DERIVATIVES, 
    THE_INTEGRALS, 
    DESMOS_GRAPH
} from './constants.js';

export const setRoute = (routeType) => (dispatch) => {
    switch (routeType) {
        case 'HOME':
        dispatch({
          type: HOME,
          payload: HOME,
        })
        break;
      case 'FUNCTIONS_AND_LIMIT':
        dispatch({
          type: FUNCTIONS_AND_LIMIT,
          payload: FUNCTIONS_AND_LIMIT,
        })
        break;
        case 'DERIVATIVES_OF_FUNCTIONS':
        dispatch({
          type: DERIVATIVES_OF_FUNCTIONS,
          payload: DERIVATIVES_OF_FUNCTIONS,
        })
        break;
        case 'USE_OF_DERIVATIVES':
        dispatch({
          type: USE_OF_DERIVATIVES,
          payload: USE_OF_DERIVATIVES,
        })
        break;
        case 'THE_INTEGRALS':
        dispatch({
          type: THE_INTEGRALS,
          payload: THE_INTEGRALS,
        })
        break;
        case 'DESMOS_GRAPH':
        dispatch({
          type: DESMOS_GRAPH,
          payload: DESMOS_GRAPH,
        })
        break;
      default:
        dispatch({
          type: HOME,
          payload: HOME
        })
    }
  }