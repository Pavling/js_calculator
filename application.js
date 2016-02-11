var calculator = calculator || {
  previousOperator: 0,
  previousTotal: 0,
  newTotal: 0,
  runningTotal: document.getElementById('running_total'),

  add: function(number){
    return parseFloat(calculator.previousTotal) + parseFloat(number);
  },

  subtract: function(number){
    return parseFloat(calculator.previousTotal) - parseFloat(number);
  },

  multiply: function(number){
    return parseFloat(calculator.previousTotal) * parseFloat(number);
  },

  divide: function(number){
    return parseFloat(calculator.previousTotal) / parseFloat(number);
  },

  numberClick: function(number) {
    if (calculator.runningTotal.value == '0' || calculator.newTotal) {
      calculator.runningTotal.value = '';
      calculator.newTotal = false;
    }
    calculator.runningTotal.value = calculator.runningTotal.value + number;
  },

  operatorClick: function(operator) {
    if (calculator.previousTotal && calculator.previousOperator) {
      switch (calculator.previousOperator) {
        case ('+'):
        calculator.runningTotal.value = calculator.add(calculator.runningTotal.value);
        break;
        case ('-'):
        calculator.runningTotal.value = calculator.subtract(calculator.runningTotal.value);
        break;
        case ('*'):
        calculator.runningTotal.value = calculator.multiply(calculator.runningTotal.value);
        break;
        case ('/'):
        calculator.runningTotal.value = calculator.divide(calculator.runningTotal.value);
        break;
      }
    }

    if (operator == '=') {
      calculator.previousOperator = null;
    } else {
      calculator.previousOperator = operator;
    }
    calculator.previousTotal = calculator.runningTotal.value;
    calculator.newTotal = true;
  }

};

var numbers = document.getElementsByClassName('number');
for (var i = numbers.length - 1; i >= 0; --i) {
  numbers[i].addEventListener('click', function(e) {
    number = e.srcElement.innerText;
    calculator.numberClick(number);
  });
};

var operators = document.getElementsByClassName('operator');
for (var i = operators.length - 1; i >= 0; --i) {
  operators[i].addEventListener('click', function(e) {
    operator = (e.srcElement.innerText);
    calculator.operatorClick(operator);
  });
};

document.getElementById('clear').addEventListener('click', function() {
  if (calculator.runningTotal.value == 0) {
    calculator.previousOperator = null;
    calculator.previousTotal = null;
  }
  calculator.runningTotal.value = '';
});





