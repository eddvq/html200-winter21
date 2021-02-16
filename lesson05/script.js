
let userPrompt = prompt('Welcome to First Bank of Eddy. How can I help you today?');
let action = userPrompt.toUpperCase();
let userAccount = 100;

function asker() {
  userPrompt = prompt('Is there anything else we can help you with?');
  action = userPrompt.toUpperCase();
  return action;
}


// maybe put the while out here
while (action != 'Q') {
  switch (action) {
    //Withdrawals
    case 'W':
      let w = prompt('How much do you want to withdraw?');
      userAccount = userAccount - parseInt(w);
      alert('Your account balance is: ' + userAccount);
      asker();
      // userPrompt = prompt('Is there anything else we can help you with?');
      // action = userPrompt.toUpperCase();
      break;
    //Deposit
    case 'D':
      let d = prompt('How much do you want to deposit?');
      userAccount = userAccount + parseInt(d);
      alert('Your account balance is: ' + userAccount);
      asker();
      // userPrompt = prompt('Is there anything else we can help you with?');
      // action = userPrompt.toUpperCase();
      break;
    //ViewBalance
    case 'B':
      alert('Your total balance is: ' + userAccount);
      asker();
      // userPrompt = prompt('Is there anything else we can help you with?');
      // action = userPrompt.toUpperCase();
      break;
    //Error Recovery
    default:
      alert('Unrecognized command. W - Withdraw, D - Deposit, B - View Balance, Q - Quit');
      asker();
      // userPrompt = prompt('Let us try again! How can we help you today?');
      // action = userPrompt.toUpperCase();
      break;
    };
}
