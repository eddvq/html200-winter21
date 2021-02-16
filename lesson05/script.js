
let userPrompt = prompt('Welcome to First Bank of Eddy. How can I help you today?');
let action = userPrompt.toUpperCase();
let userAccount = 1000;

function asker() {
  if (userAccount <= 100) {
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
  } else if(userAccount - withdrawal <= 300) {
    let confirmation = confirm('Your withdrawal will leave your balance under the monthly minimum requirment. Are you sure you would like to proceed?');
    return confirmation;
  } else {
    return true;
  }
}

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
        alert('Your account balance is: ' + userAccount);
        asker();
      }
      break;
    //Deposit
    case 'D':
      let d = prompt('How much do you want to deposit?');
      let dNumber = parseInt(d);
      if (dNumber + userAccount > 50000) {
        alert('Your account will exceed maximum balance. Please try again');
        asker();
      } else {
        userAccount = userAccount + dNumber;
        alert('Your account balance is: ' + userAccount);
        asker();
      }
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
