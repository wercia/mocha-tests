const {unique} = require('../src/utils')

const assert = require('assert')

describe('Unique operator', () => {
    it('should return the collection if ther are no repetitions', () => {
        //arrange
        //act
        const result = unique([1,2,3])
        //assert
        assert.deepStrictEqual(result, [1,2,3])
    })
    it('should remove repetition',  () => {
        assert.deepStrictEqual(unique([1,2,3,3]),[1,2,3])
    });
    it('should return  empty collection for empty input', function () {
        assert.deepStrictEqual(unique([]),[])
    });
    it('should remove repetition by attribute', function () {
        const input = [{
            name: "Janek",
            nationality:"PL"
        }, {
            name: "Hans",
            nationality:"DE"
        }, {
            name: "Krysia",
            nationality:"PL"
        }]
        assert.deepStrictEqual(unique(input,'nationality'),[{
            name: "Janek",
            nationality:"PL"
        }, {
            name: "Hans",
            nationality:"DE"
        }])
    });
})
