import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../../store/orderSlice';
import './orderForm.scss';

interface OrderFormProps {
  id: string;
  quantity: number;
}

const OrderForm: React.FC<OrderFormProps> = ({ id, quantity }) => {
  const [itemQty, setItemQty] = useState(quantity);
  const dispatch = useDispatch();

  const addItemQtyHandler = () => {
    // setItemQty(prevQty => (prevQty = prevQty + 1));
    dispatch(orderActions.addOneToCart(id));
  };

  const removeItemHandler = () => {
    if (itemQty >= 1) {
      setItemQty(prevQty => (prevQty = prevQty - 1));
    }
  };

  return (
    <form className="order-form">
      <div className="order-form-actions">
        <button type="button" onClick={removeItemHandler}>
          -
        </button>
        <input type="number" readOnly min="0" max="40" value={itemQty} />
        <button type="button" onClick={addItemQtyHandler}>
          +
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
