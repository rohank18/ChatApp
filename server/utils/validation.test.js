const expect = require('expect');
const {isRealString} = require('./validation');

describe('validation', () => {
    it('should reject non-string value', () => {
       var res = isRealString(98);
       expect(res).toBe(false); 
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('  ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space character', () => {
        var res = isRealString(' Rohan ');
        expect(res).toBe(true);
    })
})