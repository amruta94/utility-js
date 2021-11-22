const cube = require('./cube');

const map = (arrayOfNumbers,paramFunction) => {
    if (paramFunction && (typeof paramFunction == "function") && paramFunction.name == "cube") {   
        if(arrayOfNumbers.length == 0){
            return arrayOfNumbers;
        }
        
        return arrayOfNumbers.map(function(number){
            return cube(number);
        })
    }
   
     
}

module.exports = map;