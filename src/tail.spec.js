const head = require('./head');

describe('Head', () => {
    var arrayOfObjects = [1,2,3];
    it('Head of [1,2,3] is 1', () => {
        expect(head(arrayOfObjects)).toEqual(1);
    });

    var emptyArray = [];
    it('Head of [] is null', () => {
        expect(head(emptyArray)).toEqual(null);
    });

})
