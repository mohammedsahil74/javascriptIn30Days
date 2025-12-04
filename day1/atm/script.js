const { log } = require("node:console");

let prompt = require("prompt-sync")();
const atmPin = parseInt(1234);
let balanceAmount = 1000;

let pinInput = parseInt(prompt("please enter your pin"));
console.log(pinInput);

if (pinInput == atmPin) {
  let options = ["1.Check Balance", "2.Withdraw", "3.deposit : "];
  let menuMessage = options.join("\n\n");
  let userchoice = prompt(menuMessage);

  if (userchoice == 1) {
    console.log(balanceAmount);
  } else if (userchoice == 2) {
    console.log("Withdrawl feature is coming soon");
  }
} else {
  console.log("pin is wrong");
}
