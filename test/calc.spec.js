
const  {Calculator} = require('../src/calc.js')
const  assert = require('assert')


describe('Calculator', () => {
    it('$should add numbers$', () => {
        assert.equal(Calculator.add(2, 2), 4)
        // assert.equal(Calculator.add(2, 2), 5, "$bedny wynik dodawania$")
    })
})
