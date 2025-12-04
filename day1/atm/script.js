let prompt = require("prompt-sync")();
const atmPin = parseInt(1234);
let balanceAmount = 1000;

let pinInput = parseInt(prompt("please enter your pin"));
console.log(pinInput);

if (pinInput == atmPin) {
  let options = ["1.Check Balance", "2.Withdraw", "3.deposit : "];
  let menuMessage = options.join("\n\n");
  let userchoice = parseInt(prompt(menuMessage));
  switch (userchoice) {
    case 1:
      console.log(balanceAmount);
      break;
    case 2:
      let withdarwlAmount = parseInt(
        prompt("please enter the withdarwl amount : "),
      );
      if (withdarwlAmount > balanceAmount) {
        console.log("you dont have that much money");
      } else {
        balanceAmount = balanceAmount - withdarwlAmount;
        console.log("Withdrawal Successful! New Balance: " + balanceAmount);
      }
      break;
  }
} else {
  console.log("wrong pin");
}
