
// Getting the screen element.
var screen = document.getElementById('screen');
// console.log(screen);

// This variable will be the innerText of the screen.
var valInp = '';

// This function will get called on every click.
// @param {val} string/integer input from the button.
function submitValue(val){
  var current_value = screen.innerText;
  var res;

  switch (val) {
    case '+':
      selectedOperation = operation(current_value,'+');
      valInp = '';
      break;
    case '-':
      selectedOperation = operation(current_value,'-');
      valInp = '';
      break;
    case '*':
      selectedOperation = operation(current_value,'*');
      valInp = '';
      break;
    case '/':
      selectedOperation = operation(current_value,'/');
      valInp = '';
      break;
    case '=':
      valInp = selectedOperation(current_value);
      break;
    default:
      valInp += val;
  }

  console.log(valInp);

  // Setting the innerText of the screen.
  screen.innerText = valInp;
}

// Closure operation function.
// @params {fval} integer current value on screen.
// @param {oper} string operation to perform.
function operation(fval,oper){
  function maths(sval) {
    var res;
    switch (oper) {
      case '+':
        res = parseInt(fval)+parseInt(sval);
        break;
      case '-':
        res = parseInt(fval)-parseInt(sval);
        break;
      case '*':
        res = parseInt(fval)*parseInt(sval);
        break;
      case '/':
        res = parseInt(fval)/parseInt(sval);
        break;
    }

    // This will return the resulting value after the operation.
    return res;
  }
  return maths;
}
