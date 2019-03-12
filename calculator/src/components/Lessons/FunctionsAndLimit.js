import React from 'react';

class FunctionsAndLimit extends React.Component {


  functionInfo() { 
    console.log("\nLinear : y = mx + b");
    console.log("\tDomain - All Real Numbers");
    console.log("\tRange - All Real Numbers");
    console.log("\nQuadratic : y = x^2");
    console.log("\tDomain - All Real Numbers");
    console.log("\tRange - [0,infinity)");
    console.log("\nCubic : y = x^3");
    console.log("\tDomain - All Real Numbers");
    console.log("\tRange - All Real Numbers");
    console.log("\nCubic Root : y = CUBIC ROOT(x)");
    console.log("\tDomain - All Real Numbers");
    console.log("\tRange - All Real Numbers");
    console.log("\nAbsolute Value: y = |x|");  
    console.log("\tDomain - All Real Numbers");
    console.log("\tRange - [0,infinity)");   
    console.log("\nLogarithmic : y = logx");
    console.log("\tDomain - (0, infinity)");
    console.log("\tRange - All Real Numbers");
    console.log("\nExponential : y = b^x");
    console.log("\tDomain - All Real Numbers");
    console.log("\tRange - (0,infinity)");
    console.log("\nRational : y = 1/x");
    console.log("\tDomain - All Real Numbers except x !=0");
    console.log("\tRange - All Real Numbers except y != 0");
    console.log("\nSquare Root = y = square root(2x+5)");
    console.log("\tDomain - [0,infinity)");
    console.log("\tRange - [0,infinity)");
    console.log("\nTrig functions: Sinx, Cosx, Tanx, Cscx, Secx, Cotx");
  }

  functionTranslationRule() { 
    console.log("Translate -> Opposite Day inside the house -> (inside parenthesis is house) -> change domain and range");
    console.log("Negative sign correlates translating to the right");
    console.log("Positive sign correlates translating to the left");
  }

  evenOddNeitherInfo() { 
    console.log("\nEven f(-x) = f(x) : -same # + same sign");
    console.log("When you get same answer with negative and positive x value");
    console.log("Notice: Symmetrical along the y - axis");
    console.log("\nOdd f(-x) = f(-x): -same # + different sign");
    console.log("When you get different answer with negative and positive x value");
    console.log("Notice: Symmetrical along the origin. Double fold by origin its same.");
  }

  sayWhetherTheFunctionIsEvenOddOrNeitherAndExplain(equation) { 
    console.log("Postive Number: " + this.positiveNumberEvaluation(equation));
    console.log("Negative Number: " + this.negativeNumberEvaluation(equation));
  }

  positiveNumberEvaluation(equation) { 
    console.log("\nEquation : " + equation);
    var positiveNumberReplace = 2;
     var eachTerms = this.separateTerms(equation);
     var list = eachTerms;
     
     for(var i = 0; i < eachTerms.length;i++) { 
      
      if(this.isNotOperationSign(i, eachTerms)) { 
        console.log("Each Term: " + eachTerms[i]);
        var res = eachTerms[i].replace("x", "("+ positiveNumberReplace + ")");
        list[i] = this.simplify(res);
        console.log("SIMPLIFIED: " + res + "---->" + this.simplify(res));
     } 
    } 

    var showWork = "Show Work: ";
    for(var j = 0; j < list.length;j++) { 
      showWork += list[j];
    } 
   return showWork;
  }

  negativeNumberEvaluation(equation) { 
    console.log("\nEquation : " + equation);
    var negativeNumberReplace = -2;
     var eachTerms = this.separateTerms(equation);
     var list = eachTerms;
     
     for(var i = 0; i < eachTerms.length;i++) { 
      
      if(this.isNotOperationSign(i, eachTerms)) { 
        var res = eachTerms[i].replace("x", "(" + negativeNumberReplace+ ")");
        list[i] = this.simplify(res);
        console.log("SIMPLIFIED: " + res + " ---->" + this.simplify(res));
     } 
    } 

    var showWork = "Show Work: ";
    for(var j = 0; j < list.length;j++) { 
      showWork += list[j];
    } 
    return showWork;
  }

  simplify(term) { 
    if(term.includes("^")) { 
      var base = term.split("^")[0];
      var exponent = term.split("^")[1];
      var result = Math.pow(base, exponent);
      return result;
    } else { 
      return term;
    }
  }

  separateTerms(equation) { 
    return equation.split(" ");
  }

  isNotOperationSign(i, eachTerms) { 
    return (eachTerms[i] !== "+" && eachTerms[i] !== "-" && eachTerms[i] !== "/" && eachTerms[i] !== "*");
  }

  odd() { 

  }

  even() { 
   
  }

  neither() { 

  }

  findDomain() { 

  }

  findRange() { 

  }

  performComposition() { 

  }

  findLimit() { 

  }

  findLimitsOfInfinity() { 

  }

  findLimitsOfRationalFunctions() { 

  }

  findLimitsAsXApproachesInfinityOrNegativeInfinity() { 

  }


  render() {
   this.functionInfo();
   this.functionTranslationRule();
   this.evenOddNeitherInfo();
   this.sayWhetherTheFunctionIsEvenOddOrNeitherAndExplain("2x + 1");

    return (
      <div>
      <p>Here I am!!!</p>
      </div>
    )
  }
}
export default FunctionsAndLimit;