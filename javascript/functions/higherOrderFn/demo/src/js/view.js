// responsible for display of content
export const renderRows = (cartItems) => {
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

export const renderTotal = (cartItems) => {
  let totalCost = 0;
  let totalQuantity = 0;

  cartItems.forEach((item) => {
    totalCost = totalCost + item.cost * item.quantity;
    totalQuantity = totalQuantity + item.quantity;
  });

  document.querySelector('.total-quantity').innerHTML = totalQuantity;
  document.querySelector('.total-cost').innerHTML = totalCost;
};

// higher order function

//

export const renderCurrencySelector = (currencyRates) => {
  let options = '';
  for (let key in currencyRates) {
    // key -> USD
    // currencyRates[key] -> 1;
    currencyRates[key];
    // ' `
    options += `<option value="${currencyRates[key]}">${key}</option>`;
  }
  document.querySelector('select[name="currency-picker"]').innerHTML = options;
};
