const reduce = require('./reduce');

describe('reduce', () => {
    var emptyArray = [];
    
    it('reduce([],(x,y)=>x+y) is undefined', () => {
        expect(reduce(emptyArray, (x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([],v(x,y)=>x+y,10) is 10', () => {
        expect(reduce(emptyArray, (x,y)=>x+y , 10)).toEqual(10);
    });

    var characterArray = ['a','b','c'];
    var reduceedResult = 'abc';
    it('reduce([a,b,c],(x,y)=>x+y) is abc', () => {
        expect(reduce(characterArray, (x,y)=>x+y)).toEqual(reduceedResult);
    });

    var reduceedResultWithParamVal = 'zabc';
    it('reduce[a,b,c],(x,y)=>x+y,’z’ is zabc', () => {
        expect(reduce(characterArray, (x,y)=>x+y, 'z')).toEqual(reduceedResultWithParamVal);
    });
})
