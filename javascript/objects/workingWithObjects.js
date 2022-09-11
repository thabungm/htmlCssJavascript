const player = {
  name: 'Mike',
  score: 3,
  address: {
    street: '#14 East',
    contact: {
      mobile: '9738412345',
      landline: 'ABC-123',
    },
  },
};

/* const player2 = JSON.parse(JSON.stringify(player));
player2.name = 'Testing'; */
// const player2 = player;
/* const player2 = player;
player2.name = 'Xyz';
console.log(player); */
// mutations -> add/ remove/delete
// Destructuring & spread operator from es6

/* const player2 = Object.assign({}, player);
player2.name = 'Xyz';
console.log(player); */
/* const player2 = { ...player }; // shallow copy
player2.name = 'Xyz'; */
// player2.address.street = 'New street';
// console.log(player);

// deepCopy
/* for (let i in player2) {
  console.log(i);
  console.log(player2[i]);
} */

/* function deepCopy(object) {
  let finalCopy = {};

  for (let i in object) {
    if (typeof object[i] === 'object') {
      finalCopy[i] = { ...deepCopy(object[i]) };
    } else {
      finalCopy[i] = object[i];
    }
  }
  return finalCopy;
}
const player3 = deepCopy(player);
player3.address.street = '3rd address';
console.log(player); */

/* 
const mobile = player.address.contact.mobile;
const name = player.name;
const score = player.score;
 */

// destructuring assignment
/* const {
  name,
  score,
  address: {
    contact: { mobile },
  },
} = player;
console.log(name, score, mobile); */

/*

function recursiveFunction(evenNumber, maxCount) {
  console.log(evenNumber);
  if (evenNumber < maxCount - 1) {
    recursiveFunction(evenNumber + 2, maxCount);
  }
}
recursiveFunction(0, 9); */

// recursiveFunction(0, 10);

// get

// detecting presence of property
/* const course = {
  name: 'MERN',
  durationInMonths: 3,
};
course.name = 'HTML'; */
// in finds the property across user defined and prototype properties
// console.log('toString' in course);
// console.log('boolean' in course);
/* 
console.log(course.hasOwnProperty('toString'));
console.log(course.hasOwnProperty('name'));
 */
// console.log(Object.keys(player));
// console.log(Object.values(player));
// console.log(Object.entries(player));

//property descriptors
/* const property = Object.getOwnPropertyDescriptor(course, 'name');
console.log(property);
for (let i in course) {
  console.log(i);
} */

// console.log(Object.getOwnPropertyDescriptor(course, 'name'));
/* Object.defineProperty(course, 'name', {
  value: player.address,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(course); */
/* console.log(Object.getOwnPropertyDescriptor(course, 'name'));
for (let i in course) {
  console.log(i);
}
course.name = 'React';
// delete course.name
console.log(course); */

// Object seal and object freeze
/* const course = {
  name: 'MERN',
  durationInMonths: 3,
}; */
// course.isCompleted = false;
// console.log(course);
/* Object.seal(course);
course.isCompleted = false;
course.durationInMonths = 6;
delete course.durationInMonths;
console.log(course); */
/* 
Object.freeze(course);
course.name = 'Javascript';
delete course.durationInMonths;

console.log(course);
 */

/* const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
]; */
// for loop, forEach
/* for (let i = 0; i < library.length; i++) {
  console.log('Reading status', library[i].readingStatus);
}
 */

/* library.forEach(function (el) {
  console.log('Reading status', el.readingStatus);
}); */
