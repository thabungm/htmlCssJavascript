// Get element
// const userDiv = document.getElementById('user');
const userDiv = document.querySelector('#user');

console.log('userDiv', userDiv);

// const courseText = document.getElementsByClassName('name');
const courseText = document.querySelector('.name');
console.log('courseText', courseText);

// create element
const courseElement = document.createElement('h3');
courseElement.innerText = 'Demo Text';
// console.log(courseElement);
document.body.append(courseElement);

// Update content
function updateText() {
  const userDiv = document.getElementById('user');

  userDiv.innerHTML = '**Mock user updated**';
}

function printInConsole() {
  const course1 = document.getElementById('course1');
  const course2 = document.getElementById('course2');
  console.log(course1.value);
  console.log(course2.value);
}

function printOnUI() {
  const course1 = document.getElementById('course1');
  const course2 = document.getElementById('course2');
  document.body.append(course1.value, course2.value);
}

/* Create a UI which contians 2 fields
firstName & lastName
onclick of button read these values and print on the UI */
