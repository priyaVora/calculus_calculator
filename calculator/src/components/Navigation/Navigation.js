import React from 'react';
import 'tachyons';
import './Navigation.css';

const Navigation = ({route, changeRoute}) => {
  console.log("Navigation Route: " + route)
      return(
      <div id="home-nav"  style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p  id="nav-item" onClick={()=> changeRoute('HOME')}  className='f4 link dim pa1 pointer'>Home</p>
        <p  id="nav-item" onClick={()=> changeRoute('FUNCTIONS_AND_LIMIT')}  className='f4 link dim pa1 pointer'>Functions and their Limits</p>
        <p  id="nav-item" onClick={()=> changeRoute('DERIVATIVES_OF_FUNCTIONS')}  className='f4 link dim pa1 pointer'>The Derivative of a Function</p>
        <p  id="nav-item" onClick={()=> changeRoute('USE_OF_DERIVATIVES')}   className='f4 link dim pa1 pointer'>Uses of the Derivative </p>
        <p  id="nav-item" onClick={()=> changeRoute('THE_INTEGRALS')}  className='f4 link dim pa1 pointer'>The Integral</p>
        <p  id="nav-item" onClick={()=> changeRoute('DESMOS_GRAPH')}  className='f4 link dim pa1 pointer'>Desmos Graph</p>
      </div>
          );
}

export default Navigation;
