const cube = require('./cube');
const identity = require('./identity');

const map = (arrayOfNumbers,paramFunction) => {
    if (paramFunction && (typeof paramFunction == "function")) {   
        if(arrayOfNumbers.length == 0){
            return arrayOfNumbers;
        }
        
        return arrayOfNumbers.map(function(number){
            return paramFunction(number);
        })
    }
}

module.exports = map;