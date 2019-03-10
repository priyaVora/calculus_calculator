import React from 'react';
import 'tachyons';
import DerivativeOfFunctions from '../Lessons/DerivativeOfFunctions';
import FunctionsAndLimit from '../Lessons/FunctionsAndLimit';
import Integrals from '../Lessons/Integrals';
import UseOfDerivatives from '../Lessons/UseOfDerivatives';
import Homepage from '../Homepage/Homepage';
import PowerRule from '../Lessons/PowerRule';
import './Calculation.css';
import 'tachyons';

class Calculation extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      route: [
        this.props.route
      ],
    };
  }

  sin(value) { 
    return Math.sin(value);
  }

  cos(value) { 
    return Math.cos(value);
  }

  tan(value) { 
    return Math.tan(value);
  }

  csc(value) { 
    return 1/Math.sin(value);
  }

  sec(value) { 
    return 1/Math.cos(value);
  }

  cot(value) {
   return 1/Math.tan(value);
  }
    findBase(term) { 
      return (term.split('^')[0]);
    }
  
    findExponent(term) {
      return (term.split('^')[1]);
    }

    findCoefficient(term) { 
      var coeff = this.findBase(term).split('x')[0];
      console.log("Coefficient: " + coeff); 
      return coeff;
    }

  powerRule(term) { 
    console.log("Term: " + term);
    console.log("Base: " + this.findBase(term));
    console.log("Exponent: " + this.findExponent(term));
    var coeff = this.findCoefficient(term);
    var exponent = this.findExponent(term);
    var poweredDownExponent = exponent -1;
    var newCoeff = (coeff * exponent);

    console.log("New Exponent: " + poweredDownExponent);
    console.log("New Coefficient " + newCoeff);
    console.log("\nShow work: " + "(" + coeff + ")(" + exponent + ")" + "x^" + "(" + exponent + "-1)");
    var result = "Result: " + newCoeff + "x^" + poweredDownExponent;
    console.log(result);
    return result;
  }

 
  
  changeCalculation(route) { 
    console.log(route)
    switch (route) {
      case "HOME":  
        return <Homepage/>;
      case "FUNCTIONS_AND_LIMIT": 
        return <FunctionsAndLimit/>
      case "DERIVATIVES_OF_FUNCTIONS":  
        return <DerivativeOfFunctions/>;
      case "USE_OF_DERIVATIVES":  
        return <UseOfDerivatives/>;
      case "THE_INTEGRALS":  
        return <Integrals/>;
      case "DESMOS_GRAPH":  
        return "DESMOS_GRAPH!";
      case "POWERRULE":  
        return "Here is the code: " + this.powerRule("7x^3");
      default:      
      return "Here is the code: " + this.powerRule("7x^3");
  }
}

render() { 
   return (
      <div>
        {this.changeCalculation(this.props.route)}
      </div>
    );
  }
} 
export default Calculation;
;