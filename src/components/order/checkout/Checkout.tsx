import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../../store/uiSlice';
import { orderActions } from '../../../store/orderSlice';
import useValidation from '../../../hooks/useValidation';
import Total from './total/Total';
import './checkout.scss';

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(false);

  const orderMethodChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDelivery(prevState => !prevState);
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(uiActions.openModal());
    dispatch(orderActions.clearCart());
    navigate('/', { replace: true });
  };

  return (
    <>
      <form className="checkout" onSubmit={submitFormHandler}>
        <h1 className="checkout__heading">Checkout</h1>
        <label htmlFor="full-name" className="checkout__label">
          Full name
        </label>
        <input type="text" id="full-name" className="checkout__input" />
        <label htmlFor="phone-number" className="checkout__label">
          Phone number
        </label>
        <input type="tel" id="phone-number" className="checkout__input" />
        <div className="checkout__order-method">
          <label htmlFor="delivery" className="checkout__label">
            Pick up:
          </label>
          <input
            type="checkbox"
            value="pick-up"
            id="pick-up"
            className="checkout__checkbox"
            onChange={orderMethodChangeHandler}
            checked={!delivery}
          />
          <label htmlFor="delivery" className="checkout__label">
            Delivery:
          </label>
          <input
            type="checkbox"
            value="delivery"
            id="delivery"
            className="checkout__checkbox"
            onChange={orderMethodChangeHandler}
            checked={delivery}
          />
        </div>
        {delivery && (
          <div>
            <label htmlFor="address" className="checkout__label">
              Address
            </label>
            <input type="text" id="address" className="checkout__input" />
            <label htmlFor="city" className="checkout__label">
              City
            </label>
            <input type="text" id="city" className="checkout__input" />
            <label htmlFor="instructions" className="checkout__label">
              Special Instructions
            </label>
            <textarea id="instructions" rows={3} className="checkout__input" />
          </div>
        )}
        <Total delivery={delivery} />
        <button type="submit">Place order</button>
      </form>
    </>
  );
};

export default Checkout;
