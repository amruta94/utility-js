const tail = require('./tail');

describe('tail', () => {
    var arrayOfObjects = [1,2,3];
    var tailOfArrayOfObjects = [2,3];
    it('tail of [1,2,3] is [2,3]', () => {
        expect(tail(arrayOfObjects)).toEqual(tailOfArrayOfObjects);
    });

    var emptyArray = [];
    it('tail of [] is []', () => {
        expect(tail(emptyArray)).toEqual(emptyArray);
    });

})
