import React from 'react';
import 'tachyons';
import DerivativeOfFunctions from '../Lessons/DerivativeOfFunctions';
import FunctionsAndLimit from '../Lessons/FunctionsAndLimit';
import Integrals from '../Lessons/Integrals';
import UseOfDerivatives from '../Lessons/UseOfDerivatives';
import Homepage from '../Homepage/Homepage';
// import PowerRule from '../Lessons/PowerRule';
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
      if(coeff) { 

      } else { 
        coeff = 1;
      }
      console.log("Coefficient: " + coeff); 
   
      return coeff;
    }

  powerRule(term) { 
    var result;
    if(term.includes('/')) { 
        var numerator = term.split('/')[0];
        console.log("Numerator: " + numerator);
        var denominator = term.split('/')[1];
        console.log("Denominator: " + denominator);

        var denomExponent = denominator.split('^')[1];
        console.log("Denom: " + denomExponent);
        //check if the denominator has negative power 
        //---make the power positive and move it to the numerator

        //check if the denominator has positive power
        //---make the power negative and move it to the numerator
       if(denomExponent < 0) { 
          console.log("Negative exponent change: " + numerator + "x^" + (-1) * denomExponent);
       } else if(denomExponent > 0) { 
          console.log("Positive exponent change: " + numerator + "x^" + (-1) * denomExponent);
       }

       var changedTerm = "" + (numerator + "x^" + (-1) * denomExponent);
       console.log(changedTerm);

      this.powerRule(changedTerm);
    } else { 
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
      result = "Result: " + newCoeff + "x^" + poweredDownExponent;
      console.log(result);
    }
  
    return result;
  }

  productRule(term) { 

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
      return "Here is the code: " + this.powerRule("3x^4");
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