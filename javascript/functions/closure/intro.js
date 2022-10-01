function outerFn(inputMessage) {
  const message = inputMessage;
  console.log(message);
  function innerFn() {
    console.log(message);
  }
  return innerFn;
}

// outerFn();

const result = outerFn('Hi');
result();
