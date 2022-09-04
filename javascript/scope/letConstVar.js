// different ways of defining/declaring variable
/* var course = 'MERN';
course = 'Javascript';

let currentProgress = 3;
currentProgress = 4;

const totalSession = 40;
const pi = 3.141;
 */
//scopes: visibility of variable

//var: global/function
/* var message = 'Good morning';
function printMessage() {
  console.log(message);
}

console.log(message);
printMessage(); */

function printMessage() {
  //   var message = 'Good morning';
  var condition = true;
  if (condition) {
    // codeblock | block
    var message = 'Good morning'; // it works
    // let  message = 'Good morning'; // it does not work
  }
  console.log('Inside', message);
}
// console.log('Inside', message);

// console.log(message);
printMessage();

/* function printMessage() {
  var condition = true;
  //   let message = 'Good morning';

  if (condition) {
    let message = 'Good morning';
    // codeblock | block
    // var message = 'Good morning';
  }
  console.log('Inside', message);
}

// console.log(message);
printMessage(); */
/* const fixedValue = 123;
fixedValue = 321; */

/* var number1 = 10;
var number2 = '5';
const result = number1 + number2; // concatenation
console.log(result);
console.log('Hello' + ' World');
console.log(number1 / number2); //10/'5'
console.log('hello' / 'world'); // -> NaN
console.log(10 - '2'); // -> NaN
 */
