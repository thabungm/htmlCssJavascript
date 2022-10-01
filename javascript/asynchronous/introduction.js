/* const intervalTimeout = setInterval(
  function (message) {
    console.log(message);
  },
  1000,
  'Hi world'
);
 */
// clearInterval(intervalTimeout);
/* const handlerTimeout = setTimeout(
  function (message) {
    clearInterval(intervalTimeout);
    console.log(message);
  },
  7000,
  'Clearing the interval'
); */

// clearTimeout(handlerTimeout);
/* let currentMessage = '';
const intervalTimeout = setInterval(function (message) {
  console.log(currentMessage);
  if (currentMessage == 'Hello world') {
    currentMessage = 'Hi world';
  } else {
    currentMessage = 'Hello world';
  }
}, 1000); */

/* const intervalTimeout = setInterval(function () {
  const timeNowInUTC = new Date();
  console.log(timeNowInUTC.toLocaleTimeString());
}, 1000); */

function funcOne() {
  setTimeout(function () {
    // console.log('funcTwo');

    console.log('funcOne');
  }, 3000);
}
function funcTwo() {
  setTimeout(function () {
    // console.log('funcTwo');

    console.log('funcTwo');
  }, 2000);
}
function funcThree() {
  console.log('funcThree');
  for (let i = 0; i < 99999; i++) {
    console.log('Test');
  }
}

funcOne();
funcTwo();
funcThree();
