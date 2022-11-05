class Test {
  constructor() {
    this.message = 'hello';
  }

  multiply() {
    this.result = 3 * 2;
  }

  static greeting = 'Good morning';

  static printMessage() {
    console.log('I am static method');
  }
}

const test1 = new Test();
test1.multiply();
console.log(test1.result);
// const test2 = new Test();

// console.log(test1.message);
// // console.log(test1.greeting);
// console.log(Test.greeting);
// Test.printMessage();

// console.log(test2.message);
