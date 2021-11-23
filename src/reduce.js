const reduce = (arrayOfObjects, paramFunction, paramValue) => {
    if (paramFunction && (typeof paramFunction == "function")) { 
        if(paramValue == undefined){
            if(arrayOfObjects.length == 0){
                return arrayOfObjects.reduce(paramFunction,undefined);
            }                
            return arrayOfObjects.reduce(paramFunction);
        }     
        return arrayOfObjects.reduce(paramFunction,paramValue);
    }
}

module.exports = reduce;