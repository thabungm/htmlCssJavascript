//
/* console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello'); */
/* for (var counter = 1; counter <= 5; counter = counter + 1) {
  console.log('Hello');
} */

var count = 6;
while (count < 5) {
  console.log('Hello world');
  ++count; // count = count + 1;
}
console.log(count);

var count = 6;
do {
  console.log('Hi world');
  ++count; // count = count + 1;
} while (count < 5);
console.log(count);

// function
// loop
//Q1. write a function that prints numbers from 1 to 20
//Q2. write a function that prints even numbers from 1 to n
const number = 20;
if (number % 2 == 0) {
  console.log(number + ':even');
}

function task1() {
  for (var count = 1; count <= 20; count++) {
    console.log(count);
  }
}

function task2(n) {
  var counter = 1;
  while (counter <= n) {
    if (counter % 2 == 0) {
      console.log(counter);
    }
    ++counter;
  }
}
