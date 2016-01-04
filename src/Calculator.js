var Calculator = function(){};

Calculator.prototype.add = function(n1, n2) {
  return n1 + n2;
};

Calculator.prototype.sub = function(n1, n2) {
  return n1 - n2;
};

Calculator.prototype.mul = function(n1, n2) {
  return n1 * n2;
};

Calculator.prototype.div = function(n1, n2) {
  return n1 / n2;
};

module.exports = Calculator;
