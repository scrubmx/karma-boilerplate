var Calculator = require('../src/Calculator');

describe('Calculator', function() {

  var calculator;

  beforeEach(function(){
    calculator = new Calculator();
  });

  it('should add two numbers', function() {
    var sum = calculator.add(5, 2);
    expect(sum).toBe(7);
  });

  it('should substract two numbers', function() {
    var sub = calculator.sub(5, 2);
    expect(sub).toBe(3);
  });

});
