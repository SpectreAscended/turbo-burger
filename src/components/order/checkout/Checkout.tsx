import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  SK_SALES_TAX,
  DELIVERY_FEE,
  FREE_DELIVERY,
} from '../../../utlities/appConfig';
import { RootState } from '../../../store';
import './checkout.scss';

const Checkout: React.FC = () => {
  const [delivery, setDelivery] = useState(false);

  const orderMethodChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDelivery(option => !option);
  };

  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const tax = totalPrice * SK_SALES_TAX;
  const totalWithoutDelivery = totalPrice + tax;

  const totalWithDelivery = totalPrice + tax + DELIVERY_FEE;

  const freeDelivery = totalPrice >= FREE_DELIVERY;

  let totalOutput = <p>${totalWithoutDelivery.toFixed(2)}</p>;

  if (delivery && !freeDelivery) {
    totalOutput = <p>${totalWithDelivery.toFixed(2)}</p>;
  }

  const deliveryClasses = delivery && freeDelivery ? 'free-delivery' : '';

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="checkout-form" onSubmit={submitFormHandler}>
      <h1>Checkout</h1>
      <label htmlFor="full-name">Full name</label>
      <input type="text" id="full-name" className="checkout-form__input" />
      <label htmlFor="phone-number">Phone number</label>
      <input type="tel" id="phone-number" className="checkout-form__input" />
      <label htmlFor="delivery">Pick up:</label>
      <input
        type="radio"
        value="pick-up"
        id="pick-up"
        className="checkout-form__radio"
        onClick={orderMethodChangeHandler}
        checked={!delivery}
      />
      <label htmlFor="delivery">Delivery:</label>
      <input
        type="radio"
        value="delivery"
        id="delivery"
        className="checkout-form__radio"
        onClick={orderMethodChangeHandler}
        checked={delivery}
      />

      {delivery && <label htmlFor="address">Address</label>}
      {delivery && (
        <input type="text" id="address" className="checkout-form__input" />
      )}
      <div className="checkout-form__total">
        <p className="checkout-form__free-delivery">
          Free delivery on orders over ${FREE_DELIVERY.toFixed(2)}!
        </p>
        {delivery && (
          <p>
            Delivery fee:{' '}
            <span className={deliveryClasses}>${DELIVERY_FEE.toFixed(2)}</span>
          </p>
        )}
        <p>
          Sales tax ({SK_SALES_TAX * 100}%) ${tax.toFixed(2)}
        </p>
        <p>Total: {totalOutput}</p>
      </div>
      <button type="submit">Place order</button>
    </form>
  );
};

export default Checkout;
