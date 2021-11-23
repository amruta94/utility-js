const map = require('./map');
const cube = require('./cube');
const identity = require('./identity');

describe('map', () => {
    var arrayOfNumbers = [1,2,3];
    
    //cube
    var cubeOfNumbers  = [1,8,27];
    it('map([1,2,3],cube) is [1,8,27]', () => {
        expect(map(arrayOfNumbers, cube)).toEqual(cubeOfNumbers);
    });

    var emptyArray = [];
    it('map([],cube) is []', () => {
        expect(map(emptyArray, cube)).toEqual(emptyArray);
    });

    //identity
    var identityArray = [1,2,3];
    it('map([1,2,3],identity) is [1,2,3]', () => {
        expect(map(arrayOfNumbers, identity)).toEqual(identityArray);
    });

    //map([a{x : 10}],someObject => someObject.x + 1) -> [11]
    var jsonObject = { x:10 };
    var arrayOfJSONObjects = [];
    arrayOfJSONObjects.push(jsonObject);
    var resultObject = [11];

    it('map([{x : 10}],someObject => someObject.x + 1) is [11]', () => {
        expect(map(arrayOfJSONObjects, someObject => someObject.x + 1)).toEqual(resultObject);
    });
})
