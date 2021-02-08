function getNum() {
  let userNum = prompt('I lied, but I will do some math for you. Give me a number and I will square it for you.');
  userNum = Math.pow(userNum, 2);
  alert('The square is: ' + userNum);
}

function getMultiples() {
  let userNumTwo = prompt('What is the first number?');
  let userNumThree = prompt('What is the second number?');
  alert('The total is: ' + userNumTwo * userNumThree);
}
