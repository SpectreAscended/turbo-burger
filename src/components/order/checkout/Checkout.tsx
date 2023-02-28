import { useState } from 'react';
import './checkout.scss';

const Checkout: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const orderMethodChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSelectedOption(option => !option);
  };

  return (
    <form className="checkout-form">
      <h1>Checkout</h1>
      <label htmlFor="full-name">Full name</label>
      <input type="text" id="full-name" className="checkout-form__input" />
      <label htmlFor="phone-number">Phone number</label>
      <input type="tel" id="phone-number" className="checkout-form__input" />
      <label htmlFor="delivery">Pick up</label>
      <input
        type="radio"
        value="pick-up"
        id="pick-up"
        className="checkout-form__radio"
        onClick={orderMethodChangeHandler}
        checked={!selectedOption}
      />
      <label htmlFor="delivery">Delivery?</label>
      <input
        type="radio"
        value="delivery"
        id="delivery"
        className="checkout-form__radio"
        onClick={orderMethodChangeHandler}
        checked={selectedOption}
      />
      {selectedOption ? <p>Delivery</p> : <p>Pickup</p>}
    </form>
  );
};

export default Checkout;
