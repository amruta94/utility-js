const tail = (arrayOfObjects) => {
    if(arrayOfObjects.length == 0){
        return arrayOfObjects;
    }
    return arrayOfObjects.slice(1);
}
module.exports = tail;