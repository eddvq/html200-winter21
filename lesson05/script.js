
let userPrompt = prompt('Welcome to First Bank of Eddy. How can I help you today?');
let action = userPrompt.toUpperCase();
let userAccount = 100;

function asker() {
  if (userAccount < 30) {
    alert('Your account balance is low.');
  }
  userPrompt = prompt('Is there anything else we can help you with?');
  action = userPrompt.toUpperCase();
  return action;
}

function withdrawGuard(withdrawal) {
  if (withdrawal > userAccount) {
    alert('Insufficient funds!');
    return false;
  } else {
    return true;
  }
}

// function depositGuard() {
//   if () {
//
//   }
// }

while (action != 'Q') {
  switch (action) {
    //Withdrawals
    case 'W':
      let w = prompt('How much do you want to withdraw?');
      let wNumber = parseInt(w);
      if (withdrawGuard(wNumber)){
        userAccount = userAccount - wNumber;
        alert('Your account balance is: ' + userAccount);
        asker();
      } else {
        asker();
      }
      break;
    //Deposit
    case 'D':
      let d = prompt('How much do you want to deposit?');
      userAccount = userAccount + parseInt(d);
      alert('Your account balance is: ' + userAccount);
      asker();
      break;
    //ViewBalance
    case 'B':
      alert('Your total balance is: ' + userAccount);
      asker();
      break;
    //Error Recovery
    default:
      alert('Unrecognized command. W - Withdraw, D - Deposit, B - View Balance, Q - Quit');
      asker();
      break;
    }
}
