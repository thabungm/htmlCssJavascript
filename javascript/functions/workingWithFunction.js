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

const student1 = {
  course: 'MERN',
  sayGreeting: function () {
    console.log(`Welcome to student1`, this);
  }, // this
};
student1.sayGreeting();

const student2 = {
  course: 'MERN',
  sayGreeting: () => {
    this.course = 'Angular';
    console.log(`Welcome to student2`, this);
  },
};

student2.sayGreeting();

const student3 = {
  course: 'HTML',
  sayGreeting: function () {
    const printInside = () => {
      console.log(`Welcome to student3`, this);
    };
    printInside();
  },
};
student3.sayGreeting();

/*  Q1. Write a function which accepts a string and count the number of vowels in it */
/* function countVowels(inputString) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  //   for (let i = 0; i < inputString.length; i++) {
  for (let el of inputString) {
    // if (vowels.includes(inputString[i])) {
    if (vowels.includes(el)) {
      ++count;
    }
  }
  console.log(count);
}

countVowels('Hello'); */
/* 
// Q2. Write a function to convert the first letter of each word to upper case

//     Input: title = "First leTTeR of EACH Word"
//     Output: "First Letter Of Each Word"
function upperCaseFirstLetter(inputStr) {
  const strSplitted = inputStr.split(' ');
  const transformed = strSplitted.map((el) => {
    return el.charAt(0).toUpperCase() + el.substr(1).toLowerCase();
  });
  console.log(transformed.join(' '));
  console.log(
    transformed.reduce(function (prev, current) {
      return prev + ' ' + current;
    }),
    ''
  );
}
upperCaseFirstLetter('First leTTeR of EACH Word');

// Q3. Rewrite the following function using a arrow function

// function sum(a, b) {
//   let result = a + b;
//   return result;
// };

const sum = (a, b) => a + b;

// Q4. Rewrite the following function using a arrow function

// function customer() {
//     return {
//         name:'Mike',
//         wallet:34
//     }
// }

const customer = {
  name: 'Mike',
  wallet: 34,
};
 */
