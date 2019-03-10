import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoute} from './action.js';
import Navigation from './components/Navigation/Navigation';
import Calculation from './components/Calculation/Calculation';
import './App.css';

const mapStateToProps = (state) => {
  return {
    route: state.changeRoute.currentRoute,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute:(route)=> dispatch(setRoute(route))
   }
}

class App extends Component {

 
  render() {
    const {route, changeRoute} = this.props;
    return (
      <div>
      <div className="App">
        <Navigation route={route} changeRoute={changeRoute}/>
      </div>
        <Calculation route={route}/>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
