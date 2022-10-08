import cartItems from './cart.json';
import currencyRates from './currencyRates.json';
import { renderRows, renderTotal, renderCurrencySelector } from './view';

const higherOrderFn = (currencyRate, fn) => {
  function modifiedFn(inputCartItems) {
    const modifiedCartItems = inputCartItems.map(function (item) {
      return {
        ...item,
        cost: item.cost * currencyRate,
      };
    });
    fn(modifiedCartItems);
  }
  return modifiedFn;
};

renderRows(cartItems);
renderTotal(cartItems);
renderCurrencySelector(currencyRates);

const currencyPicker = document.querySelector('select[name="currency-picker"]');

currencyPicker.addEventListener('change', (event) => {
  higherOrderFn(event.target.value, renderRows)(cartItems);
  higherOrderFn(event.target.value, renderTotal)(cartItems);
});

/* renderRows(cartItems);
renderTotal(cartItems);
renderCurrencySelector(currencyRates); 
// Model -> files which deal with the data
// View -> rendering the UI
// Controller -> responsible for control of flow
// services -> has bisuness logic
*/
