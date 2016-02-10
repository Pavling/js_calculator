var calculator = calculator || {
  previousOperator: 0,
  previousTotal: 0,
  newTotal: 0,
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
  }
};


var numbers = document.getElementsByClassName('number');

for (var i = numbers.length - 1; i >= 0; --i) {
  numbers[i].addEventListener('click', function(e) {
    number = e.srcElement.innerText;
    numberClick(number);
  });
};

var operators = document.getElementsByClassName('operator');
for (var i = operators.length - 1; i >= 0; --i) {
  operators[i].addEventListener('click', function(e) {
    operator = (e.srcElement.innerText);
    operatorClick(operator);
  });
};

document.getElementById('clear').addEventListener('click', function() {
  var runningTotal = document.getElementById('running_total');

  if (runningTotal.value == 0) {
    calculator.previousOperator = null;
    calculator.previousTotal = null;
  }
  runningTotal.value = '';
});


function numberClick(number) {
  var runningTotal = document.getElementById('running_total');
  if (runningTotal.value == '0' || calculator.newTotal) {
    runningTotal.value = '';
    calculator.newTotal = false;
  }
  runningTotal.value = runningTotal.value + number;
}

function operatorClick(operator) {
  var runningTotal = document.getElementById('running_total');

  if (calculator.previousTotal && calculator.previousOperator) {
    switch (calculator.previousOperator) {
      case ('+'):
      runningTotal.value = calculator.add(runningTotal.value);
      break;
      case ('-'):
      runningTotal.value = calculator.subtract(runningTotal.value);
      break;
      case ('*'):
      runningTotal.value = calculator.multiply(runningTotal.value);
      break;
      case ('/'):
      runningTotal.value = calculator.divide(runningTotal.value);
      break;
    }
  }

  if (operator == '=') {
    calculator.previousOperator = null;
  } else {
    calculator.previousOperator = operator;
  }
  calculator.previousTotal = runningTotal.value;
  calculator.newTotal = true;
}



