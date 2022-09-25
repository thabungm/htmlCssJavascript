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

const intervalTimeout = setInterval(function () {
  const timeNowInUTC = new Date();
  console.log(timeNowInUTC.toLocaleTimeString());
}, 1000);
