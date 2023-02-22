import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Link } from 'react-router-dom';
import { RootState } from '../../../store';
import './orderForm.scss';

interface OrderFormProps {}

type CartItems = {
  id: string;
  price: number;
  title: string;
  quantity: number;
};

const OrderForm: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector<RootState>(
    state => state.order.items
  ) as CartItems[];
  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const tax = totalPrice * 0.11;

  console.log(cartItems);
  const cartItemsOutput = cartItems.map(item => {
    return (
      <li key={item.id}>
        <h3>
          {item.title} (x{item.quantity})
        </h3>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </li>
    );
  });

  return (
    <section className="order-form">
      <h1>Your order</h1>
      <ul>{cartItemsOutput}</ul>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Total: ${(totalPrice + tax).toFixed(2)}</p>
      <Link to="checkout">Proceed to checkout</Link>
    </section>
  );
};

export default OrderForm;
