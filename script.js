// 1. Define prompt so we can respond from our IDE
const prompt = require('prompt-sync')();

// 2. Create a prompt for user to select the type of operation to performance
let operator = prompt('Select an operator, a. Addition, b. Subtraction, c. Division, d. Multiplication: ');

// 3. Create a function that checks the user selection of opeartor if the opeartor selected is correct proceed else ask the user to input a correct selector and start over.
function checkOperator() {
  if (operator === 'a'|| operator === 'b' || operator === 'c' || operator === 'd' && operator != '') {
    performOperation();
  } else {
    console.log('Please insert a valid input of operator!');
  }
  reset();
}

checkOperator();
// 4. Create a function to perform our calcutions based on the operator selected by the user
//   a. Ask user for first number or input
//   b. Ask user for second number or input
//   c. Perform the operation selected on the first and second numbers inputed

// 5. Create a reset function to clear input and run checkOperator function again
function reset() {
  operator = prompt('Select an operator, a. Addition, b. Subtraction, c. Division, d. Multiplication: ');
  checkOperator();
}