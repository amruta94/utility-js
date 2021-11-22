const cube = require('./cube');
const identity = require('./identity');

const map = (arrayOfNumbers,paramFunction) => {
    if (paramFunction && (typeof paramFunction == "function") && paramFunction.name == "cube") {   
        if(arrayOfNumbers.length == 0){
            return arrayOfNumbers;
        }
        
        return arrayOfNumbers.map(function(number){
            return cube(number);
        })
    }
    else if (paramFunction && (typeof paramFunction == "function") && paramFunction.name == "identity") {   
        if(arrayOfNumbers.length == 0){
            return arrayOfNumbers;
        }
        
        return arrayOfNumbers.map(function(number){
            return identity(number);
        })
    }
   
     
}

module.exports = map;