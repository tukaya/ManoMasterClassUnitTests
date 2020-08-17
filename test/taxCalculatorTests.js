const taxCalculator = require('../src/taxCalculator')
const assert = require('chai').assert

describe('Calculates tax correctly',function(){
    
        it('should return 2 percent when apartment', function () {
            tax = taxCalculator(100000,'apartment')            
            assert.equal(tax, 2000);
        });

        it('should return 4 percent of price when villa', function () {
           
            tax = taxCalculator(100000,'villa')            
            assert.equal(tax, 4000);
        });
        
        it('should throw error if type is invalid', function () {
           
            assert.Throw(()=>taxCalculator(100000,'some type'),Error,"House type is not valid!!!")        
        });
})