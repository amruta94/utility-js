const max = require('./max');
const min = require('./min');

describe('Max', () => {

    var arrayOfNumbers = [1,2,3,4];
    it('max([1,2,3,4]) is 4', () => {
        expect(max(arrayOfNumbers)).toEqual(4);
    });
})

describe('Min', () => {

    var arrayOfNumbers = [1,2,3,4];
    it('min([1,2,3,4]) is 1', () => {
        expect(min(arrayOfNumbers)).toEqual(1);
    });
})
