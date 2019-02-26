import { 
    HOME,
    FUNCTIONS_AND_LIMIT, 
    DERIVATIVES_OF_FUNCTIONS, 
    USE_OF_DERIVATIVES, 
    THE_INTREGRALS, 
    DESMOS_GRAPH
} from './constants.js';


const initialStateRoute = {
    currentRoute: 'home'
  }

  export function changeRoute(state = initialStateRoute, action = {}) {
    switch (action.type) {
      case HOME:
        return Object.assign({}, state, {
          route: HOME
        })
        case FUNCTIONS_AND_LIMIT:
        return Object.assign({}, state, {
          route: HOME
        })
        case DERIVATIVES_OF_FUNCTIONS:
        return Object.assign({}, state, {
          route: DERIVATIVES_OF_FUNCTIONS
        })
        case USE_OF_DERIVATIVES:
        return Object.assign({}, state, {
          route: USE_OF_DERIVATIVES
        })
        case THE_INTREGRALS:
        return Object.assign({}, state, {
          route: THE_INTREGRALS
        })
        case DESMOS_GRAPH:
        return Object.assign({}, state, {
          route: DESMOS_GRAPH
        })
      default:
        return state
    }
  }