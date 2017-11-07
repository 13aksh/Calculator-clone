
var screen = document.getElementById('screen');
console.log(screen);

var valInp = '';
function submitValue(val){
  console.log(typeof val);
  valInp += val;
  console.log(valInp);
  screen.innerText = valInp;
}
