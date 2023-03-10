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
      <button type="button" onClick={removeItemHandler}>
        -
      </button>
      <span className="order-form-item-qty">{quantity}</span>

      <button type="button" onClick={addItemQtyHandler}>
        +
      </button>
    </form>
  );
};

export default OrderForm;
