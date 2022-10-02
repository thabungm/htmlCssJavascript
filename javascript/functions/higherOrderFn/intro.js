// higher order function
function printMessage(param) {
  //   console.log(param);
  const message = 'Hello world';
  param(message);
  //logWithDateTime('Hello world')
}

// printMessage(console.log);

function logWithDateTime(message) {
  console.log(new Date(), message);
}

printMessage(logWithDateTime);
