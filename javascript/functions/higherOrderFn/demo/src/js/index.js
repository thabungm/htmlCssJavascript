import cartItems from './cart.json';
import currencyRates from './currencyRates.json';

const renderRows = () => {
  const arrayOfCartElements = cartItems.map((item) => {
    return `<div class="cart-row">
        <div class="item">${item.product}</div>
        <div class="quantity">${item.quantity}</div>
        <div class="cost">${item.cost}</div>
    </div>`;
  });
  const itemRows = document.querySelector('.item-rows');
  itemRows.innerHTML = arrayOfCartElements.join('');
};
renderRows();
// const cartRow = ;
// const itemRows = document.querySelector('.item-rows');
// itemRows.innerHTML = cartRow;

// console.log(cartItems);
// console.log(currencyRates);

{
  /* <div class="cart-row">
                    <div class="item">Ice Cream - Apple</div>
                    <div class="quantity">2</div>
                    <div class="cost">12</div>
                </div> */
}
/* 
const cartRow = document.createElement('div');
cartRow.setAttribute('class', 'cart-row');

const item = document.createElement('div');
item.setAttribute('class', 'item');
item.innerText = `Ice Cream - Apple`;

const quantity = document.createElement('div');
quantity.setAttribute('class', 'quantity');
quantity.innerText = 2;

const cost = document.createElement('div');
cost.setAttribute('class', 'cost');
cost.innerText = 12; */

// itemRows.appendChild(cartRow);
