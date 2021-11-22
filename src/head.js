const head = (arrayOfObjects) => {
    if(arrayOfObjects.length == 0){
        return null;
    }
    return arrayOfObjects[0];
}
module.exports = head;