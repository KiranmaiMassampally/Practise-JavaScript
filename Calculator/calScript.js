
let currentDisplay ='';
document.querySelector('#display').value = currentDisplay;
function calculate(){


let result= eval(currentDisplay);
currentDisplay=result;
document.querySelector('#display').value=currentDisplay;
}
function  clearScreen() {
  let clear="";
  document.querySelector("#display").value=clear;
  currentDisplay='';
}
