function Product(inputName, inputPrice, inputQty) {
  this.name = inputName;
  this.price = inputPrice;
  this.quantity = inputQty;

  this.getAvailableStock = function () {
    console.log('Available stock', this.quantity);
  };

  this.buy = function (quantity) {
    // check if enough stock is there
    if (quantity > this.quantity) {
      console.log('Sorry! not enough stock');
      return;
    }

    console.log('Buy ', quantity, this.name);
    const totalCost = this.price * quantity;
    console.log('Total cost is', totalCost);
    this.quantity = this.quantity - quantity;
    console.log('Total available stock', this.quantity);
    //
  };
}

/* const mango = new Product('Mango', 2, 10);
mango.getAvailableStock();
mango.buy(3);
 */
/* const apple = new Product('Apple', 3, 33);
console.log(apple);
 */

/*
- Write a constructor function to accept `name` as input
- Define a function called greet()  which will print greeting 
eg name: Mike , message is "Good morning Mike"
- Create an instance and call the greet() function
*/

/* function GreetingFunction(inputName) {
  this.name = inputName;
}

const person1 = new GreetingFunction('Mike');
console.log(person1);
 */

function person(inputName) {
  this.name = inputName;
  this.greet = () => {
    console.log('hello', this.name);
  };
}
const test = new person('Testing');
test.greet();
