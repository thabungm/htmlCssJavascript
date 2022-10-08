import cartItems from './cart.json';
import currencyRates from './currencyRates.json';
import { renderRows, renderTotal, renderCurrencySelector } from './view';

const higherOrderFn = (currencyRate, fn) => {
  function modifiedFn() {
    const modifiedCartItems = cartItems.map(function (item) {
      item['cost'] = item['cost'] * currencyRate;
      return item;
    });
    fn(modifiedCartItems);
  }
  return modifiedFn;
};

const newFn = higherOrderFn(72, renderTotal);
newFn();
const newFn2 = higherOrderFn(72, renderRows);
newFn2();
/* renderRows(cartItems);
renderTotal(cartItems);
renderCurrencySelector(currencyRates); */
// Model -> files which deal with the data
// View -> rendering the UI
// Controller -> responsible for control of flow
// services -> has bisuness logic
