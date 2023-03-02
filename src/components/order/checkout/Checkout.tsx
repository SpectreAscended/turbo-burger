import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  SK_SALES_TAX,
  DELIVERY_FEE,
  FREE_DELIVERY,
} from '../../../utlities/appConfig';
import { RootState } from '../../../store';
import './checkout.scss';
import { uiActions } from '../../../store/uiSlice';
import { orderActions } from '../../../store/orderSlice';

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(false);

  const orderMethodChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDelivery(prevState => !prevState);
  };

  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const tax = totalPrice * SK_SALES_TAX;

  const totalWithoutDelivery = totalPrice + tax;

  const totalWithDelivery = totalWithoutDelivery + DELIVERY_FEE;

  const freeDelivery = totalPrice >= FREE_DELIVERY;

  let totalOutput = <span>${totalWithoutDelivery.toFixed(2)}</span>;

  if (delivery && !freeDelivery) {
    totalOutput = <span>${totalWithDelivery.toFixed(2)}</span>;
  }

  // Displays styling on delivery fee if delivery is free.
  const deliveryClasses =
    delivery && freeDelivery ? 'checkout-form__total-free' : '';

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(uiActions.openModal());
    dispatch(orderActions.clearCart());
    navigate('/', { replace: true });
  };

  return (
    <>
      <form className="checkout-form" onSubmit={submitFormHandler}>
        <h1>Checkout</h1>
        <label htmlFor="full-name">Full name</label>
        <input type="text" id="full-name" className="checkout-form__input" />
        <label htmlFor="phone-number">Phone number</label>
        <input type="tel" id="phone-number" className="checkout-form__input" />
        <div className="checkout-form__order-method">
          <label htmlFor="delivery">Pick up:</label>
          <input
            type="checkbox"
            value="pick-up"
            id="pick-up"
            className="checkout-form__radio"
            onChange={orderMethodChangeHandler}
            checked={!delivery}
          />
          <label htmlFor="delivery">Delivery:</label>
          <input
            type="checkbox"
            value="delivery"
            id="delivery"
            className="checkout-form__radio"
            onChange={orderMethodChangeHandler}
            checked={delivery}
          />
        </div>
        {delivery && (
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" className="checkout-form__input" />
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="checkout-form__input" />
            <label htmlFor="instructions">Special Instructions</label>
            <textarea
              id="instructions"
              rows={3}
              className="checkout-form__input"
            />
          </div>
        )}
        <div className="checkout-form__total">
          <p className="checkout-form__free-delivery">
            Free delivery on orders over ${FREE_DELIVERY.toFixed(2)}!
          </p>
          <div className="checkout-form__total-container">
            {delivery && (
              <div className="checkout-form__total-content">
                <p className="checkout-form__total-label">Delivery fee:</p>
                <span className={deliveryClasses}>
                  ${DELIVERY_FEE.toFixed(2)}
                </span>
              </div>
            )}
            <div className="checkout-form__total-content">
              <p>Sales tax ({SK_SALES_TAX * 100}%):</p>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="checkout-form__total-content">
              <p>Total:</p>
              {totalOutput}
            </div>
          </div>
        </div>
        <button type="submit">Place order</button>
      </form>
    </>
  );
};

export default Checkout;
