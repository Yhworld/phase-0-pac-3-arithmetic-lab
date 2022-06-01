let n = 819;
function add(a , b) {
    return a + b 

  }

  function subtract(a , b) {
      return a - b;
  }

  function multiply(a ,b) {
      return a * b;
}

function divide(a , b) {
      return a / b;
}
function increment(n){
    n++;
    return n;
}

increment(42);

function decrement(n){
    n--;
    return n;
}

decrement(12);

function makeInt(n){
    return parseInt(n,10);
}

makeInt("hello");

function preserveDecimal(n){
    return parseFloat(n);
}

preserveDecimal(12.3212);