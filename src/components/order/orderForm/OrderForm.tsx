import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderActions } from '../../../store/orderSlice';
import './orderForm.scss';

interface OrderFormProps {
  id: string;
  quantity: number;
}

const OrderForm: React.FC<OrderFormProps> = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const addItemQtyHandler = () => {
    dispatch(orderActions.addOneToCart(id));
  };

  const removeItemHandler = () => {
    if (quantity >= 1) {
      dispatch(orderActions.removeFromCart(id));
    }
  };

  return (
    <form className="order-form">
      <div className="order-form-actions">
        <button type="button" onClick={removeItemHandler}>
          -
        </button>
        <input type="number" readOnly min="0" max="40" value={quantity} />
        <button type="button" onClick={addItemQtyHandler}>
          +
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
