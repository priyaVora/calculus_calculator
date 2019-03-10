import { 
    HOME,
    FUNCTIONS_AND_LIMIT, 
    DERIVATIVES_OF_FUNCTIONS, 
    USE_OF_DERIVATIVES, 
    THE_INTEGRALS, 
    DESMOS_GRAPH
} from './constants.js';


const initialStateRoute = {
    currentRoute: 'power'
  }

  export function changeRoute(state = initialStateRoute, action = {}) {
    switch (action.type) {
      case HOME:
        return Object.assign({}, state, {
          currentRoute: 'HOME'
        })
        case FUNCTIONS_AND_LIMIT:
        return Object.assign({}, state, {
          currentRoute: FUNCTIONS_AND_LIMIT
        })
        case DERIVATIVES_OF_FUNCTIONS:
        return Object.assign({}, state, {
          currentRoute: DERIVATIVES_OF_FUNCTIONS
        })
        case USE_OF_DERIVATIVES:
        return Object.assign({}, state, {
          currentRoute: USE_OF_DERIVATIVES
        })
        case THE_INTEGRALS:
        return Object.assign({}, state, {
          currentRoute: THE_INTEGRALS
        })
        case DESMOS_GRAPH:
        return Object.assign({}, state, {
          currentRoute: DESMOS_GRAPH
        })
      default:
        return state
    }
  }