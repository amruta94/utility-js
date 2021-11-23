const cube = require('./cube');
const identity = require('./identity');

const map = (arrayOfObjects,paramFunction) => {
    if (paramFunction && (typeof paramFunction == "function")) {   
        if(arrayOfObjects.length == 0){
            return arrayOfObjects;
        }
        
        return arrayOfObjects.map(function(object){
            return paramFunction(object);
        })
    }
}

module.exports = map;