/* string
var courseName = 'MERN stack development';
console.log(courseName); */

// Number datatype
// var century = 100;
// console.log(century);

// // boolean
/* var isHelpful = true; //false
console.log(isHelpful);

// null
// var emptyBox = null;
// console.log(emptyBox);

// // undefined
// var earthIn2050;
// console.log(earthIn2050);

// var nameOfPerson = 'Mike';
person
name: string
age: Number 
gender: Male/Female (string)
canRead: Yes/No Boolean
attendance:[true, false, true, true]

*/
// non-primitive data type
/* var student = {
  // key-value pair
  name: 'Mike',
  age: 23,
  gender: 'Male',
  courseCompleted: false,
  address: {
    contactNumber: 9866544,
    mail: 'abc@abc.com',
  },
};

const studentName = student.name;
console.log(studentName);
const contactNumber = student.address.contactNumber;
console.log(contactNumber); */
var bigNumber = Number.MAX_SAFE_INTEGER;
// Big Integer / BigInt
var bigInteger = BigInt(Number.MAX_SAFE_INTEGER);
var bigInt100 = BigInt(100); // 100n

console.log(bigInteger);
console.log(bigInt100);
console.log(bigInteger + bigInt100);
