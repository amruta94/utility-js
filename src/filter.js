const filterUpperCase = require('./uppercase');

const filter = (arrayOfObjects, paramFunction) => {
    if (paramFunction && (typeof paramFunction == "function")) { 
        if(paramFunction.name == "filterUpperCase"){
            return arrayOfObjects.filter(function(string){
                return filterUpperCase(string);
            })
        }
        return arrayOfObjects.filter(paramFunction);
    }
}

module.exports = filter;