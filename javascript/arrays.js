// const array1 = new Array();
// const array = [1, 2, 3];
// mutable operations

// array.push(10);
// console.log(array);

// array.pop();
// console.log(array);
/*
 const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.unshift('Lemon');
console.log(fruits); */

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// const newArray = fruits.slice(1, 3);
// console.log(newArray);
/* function filterMyElement(piece) {
  console.log(piece, piece != 'Apple');
  return piece != 'Apple' && piece != 'Mango';
}
// remove apple OR filter apple
const newArray = fruits.filter(filterMyElement); //  ['Banana', 'Orange', 'Mango']
console.log(newArray); */

const numbers = [1, 2, 3, 4];
const result = numbers.map(function (ele) {
  let message;
  if (ele % 2 == 0) {
    message = ele + ' is even';
  } else {
    message = ele + ' is odd';
  }
  //   const message = ele % 2 == 0 ? ele + ' is even' : ele + 'is odd';
  return message;
});

/* console.log(numbers);
console.log(result); */

// Given passmarks: > 35
const subjects = [
  { subject: 'Maths', score: 60 },
  { subject: 'Science', score: 55 },
  { subject: 'English', score: 60 },
];
const passed = subjects.every(function (el) {
  const isPassed = el.score > 35;
  return isPassed;
});
console.log('Is passed', passed);

// for (var i=0; i<)
/* student.forEach(function (element, index) {
  console.log(index, element);
}); */

// calculate the total score
/* 
    const marks = [20, 30, 40, 50]; // -> sum
    var sum = 0;
    for (let a = 0; a < marks.length; ++a) {
    sum = sum + marks[a];
    }
    console.log(sum);
 */
/* const marks = [20, 30, 40, 50]; // -> sum of all the elements

const result = marks.reduce(function (prev, current) {
  prev = prev + current;
  return prev;
}, 0);
console.log(result); */
