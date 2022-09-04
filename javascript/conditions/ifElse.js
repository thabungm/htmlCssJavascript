/* let currentHour = 13;

if (currentHour < 12) {
  console.log('Morning');
} else {
  console.log('Evening');
}
 */

/* 
const marks = 40;

if (marks < 30) {
  console.log('Poor');
} else if (marks < 40) {
  console.log('Below Average');
} else if (marks < 50) {
  console.log('Average');
} else {
  console.log('Good');
}
 */

/* const message = 'afternoon';

if (message === 'morning') {
  console.log('Good morning');
} else if (message === 'afternoon') {
  console.log('Good afternoon');
} else if (message === 'evening') {
  console.log('Good evening');
}
 */
/* 
const message = 'morning';

switch (message) {
  case 'morning':
    console.log('Good morning');
    break;

  case 'afternoon':
    console.log('Good afternoon');
    break;

  default:
    console.log('Good NIGHTTTT!! no match');
    break;
}
 */

// ternary
/* 
let currentHour = 10;

if (currentHour < 12) {
  console.log('Morning');
} else {
  console.log('Evening');
}
 */
/* 
// ternary Operator
let currentHour = 13;

const result = currentHour < 12 ? 'Morning' : 'Evening';
console.log(result); */

// Binary logical operators
// AND -> &&
// OR -> ||
/* let currentHour = 5;
const result = currentHour >= 0 && currentHour < 12;
console.log(result);
if (currentHour >= 0 && currentHour < 12) {
  console.log('Morning');
}
 */
/* const course = 'PHP';
const result = course == 'Javascript' || course == 'HTML';
console.log(result);
if (course == 'Javascript' || course == 'HTML') {
  console.log('Right classroom');
} */

// Truthy and falsy
// Truthy values
// const result = true; // -> boolean true
// const result = 21;   // non-zero integers
// const result = 'false'; // non-empty string

// Falsy values
// const result = false; // -> boolean false
// const result = 0;    // integer 0
// const result = null;
// var result;// undefined
/* 
const result = ''; // empty string

if (result) {
  console.log('Yes');
} else {
  console.log('No');
} 
*/
/* const truthyValue = 0;
const falsyValue = null;
const logicalEndResult = truthyValue && falsyValue;
console.log(logicalEndResult); */

/* const truthy1 = 1;
const truthy2 = 'Hello';
const logicalEndResult = truthy1 && truthy2;
console.log(logicalEndResult);
 */
/* const truthyValue = 'Test';
const falsyValue = null;
const logicalEndResult = truthyValue || falsyValue;
console.log(logicalEndResult); */

/* const truthy1 = 'Test';
const truthy2 = 2;
const logicalEndResult = truthy1 || truthy2;
console.log(logicalEndResult); */

const course1 = {
  name: 'MERN stack',
  contact: {
    helpline: '123-456-7890',
    office: '567d-456-7890',
  },
};
// console.log(course1.name);
// console.log(course1.contact.helpline);

const mark = 20;
// const marksInScience = 10;
const marks = [10, 20, 40]; // Array
const fruits = ['Apple', 10, 'Banana', 'Jackfruit'];
//index
// console.log(fruits[1]);
const courses = [
  {
    name: 'MERN stack',
    contact: {
      office1: {
        mobile: 'ABC-123',
      },
      office2: {
        mobile: 'CDE-123',
      },
    },
  },
  {
    name: 'HTML',
    contact: {
      office1: {
        mobile: 'FGH-123',
      },
      /*  office2: {
        mobile: 'IJK-123',
      }, */
    },
  },
];
/* console.log(courses[0].contact.office2.mobile);
console.log(courses[1].contact.office2.mobile); */

// Optional chaining

const course3 = {
  name: 'MERN stack',
  contact: {
    office1: {
      mobile: 'FGH-123',
    },
  },
};
console.log(course3?.contact?.office1?.mobile);

// if (course3.contact.office1) {
//   console.log(course3.contact.office1.mobile);
// }

// console.log(course3.contact.office1.mobile);
