const filter = require('./filter');
const filterUpperCase = require('./uppercase');


describe('filter', () => {
    var arrayOfNumbers = [1,2,3];
    var emptyArray = [];
    
    it('filter([],x => true) is []', () => {
        expect(filter(emptyArray, x => true)).toEqual(emptyArray);
    });

    it('filter([1,2,3],x => true) is [1,2,3]', () => {
        expect(filter(arrayOfNumbers, x => true)).toEqual(arrayOfNumbers);
    });

    it('filter([1,2,3],x => false) is []', () => {
        expect(filter(arrayOfNumbers, x => false)).toEqual(emptyArray);
    });

    var filteredNumbers  = [2,3];
    it('filter([1,2,3],x => x > 1) is [2,3]', () => {
        expect(filter(arrayOfNumbers, x => x >1)).toEqual(filteredNumbers);
    });

    var characterArray  = ['a','B','c','D'];
    var filteredCharacters = ['B','D'];
    it('filter([a,B,c,D],filterUpperCase is [B,D]', () => {
        expect(filter(characterArray, filterUpperCase)).toEqual(filteredCharacters);
    });
})
