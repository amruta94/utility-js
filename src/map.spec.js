const map = require('./map');
const cube = require('./cube');

describe('map', () => {
    var arrayOfNumbers = [1,2,3];
    var cubeOfNumbers  = [1,8,27];
    it('map([1,2,3],cube) is [1,8,27]', () => {
        expect(map(arrayOfNumbers, cube)).toEqual(cubeOfNumbers);
    });

    var emptyArray = [];
    it('map([],cube) is []', () => {
        expect(map(emptyArray, cube)).toEqual(emptyArray);
    });

})
