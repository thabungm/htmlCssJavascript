/*
// function declaration 
function printMessage(message) {
  console.log(message);
}

printMessage('Hello world'); */

/* // function expression
const printMessage = function (message) {
  console.log(message);
};

printMessage('Hello world'); */

/* const printMessage = (message) => {
  console.log(message);
};

printMessage('Hello world'); */
// area of rectangle
/* 
const calculateArea = function(length, breadth)  {
  const result = length * breadth;
  return result;
}; 
*/
/* const calculateArea = (length, breadth) => length * breadth;

console.log(calculateArea(3, 4)); */
/* const squared = number => number * number;
console.log(squared(3)); */

/* function prepareDataForInsert(course, duration) {
  return {
    courseName: course.toUpperCase(),
    durationInMonths: duration,
  };
}

console.log(prepareDataForInsert('mern', 3)); */

// const prepareDataForInsertV0 = (course, duration) =>  { courseName: course.toUpperCase(), durationInMonths: duration }

/* const prepareDataForInsert = (course, duration) => ({
  courseName: course.toUpperCase(),
  durationInMonths: duration,
});

console.log(prepareDataForInsert('mern', 3)); */

const student = {
  course: 'MERN',
  sayGreeting: function () {
    console.log(`Welcome to `, this.course);
  }, // this
};

student.sayGreeting();
