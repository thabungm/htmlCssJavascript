// Get element
const userDiv = document.getElementById('user');
console.log(userDiv);

const courseText = document.getElementsByClassName('name');
console.log(courseText);

// create element
const courseElement = document.createElement('h3');
courseElement.innerText = 'Demo Text';
console.log(courseElement);
document.body.append(courseElement);

// Update content
function updateText() {
  const userDiv = document.getElementById('user');

  userDiv.innerHTML = '**Mock user updated**';
}
