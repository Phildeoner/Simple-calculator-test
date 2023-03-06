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
  resetOperatorSelection();
}

checkOperator();



// 4. Create a function to perform our calcutions based on the operator selected by the user
function performOperation() {
//   a. Ask user for first number or input
  let firstInput = parseInt(prompt('Please insert your first number: '));

  //   b. Ask user for second number or input
  let secondInput = parseInt(prompt('Please insert your second number: '));

  //   c. Perform the operation selected on the first and second numbers inputed

  if (operator === 'a') {
    let addition = firstInput + secondInput
    console.log(`The sum is ${addition}`);
    return addition;
  } else if (operator === 'b') {
    let subtraction = firstInput - secondInput
    console.log(`The sum is ${subtraction}`);
    return subtraction;
  } else if (operator === 'c') {
    let division = firstInput / secondInput
    console.log(`The sum is ${division}`);
    return division;
  } else if (operator === 'd') {
    let multiplication = firstInput * secondInput
    console.log(`The sum is ${multiplication}`);
    return multiplication;
  } else {
    console.log('Please insert a valid number or input!');
  }
  performOperation();
}

// 5. Create a function to reset the input of opeartor selection and restart the process when there is a wrong selection of opeartor
function resetOperatorSelection() {
  operator = prompt('Select an operator, a. Addition, b. Subtraction, c. Division, d. Multiplication: ');
  checkOperator();
}