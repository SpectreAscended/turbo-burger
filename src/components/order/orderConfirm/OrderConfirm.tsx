import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Link } from 'react-router-dom';
import { RootState } from '../../../store';
import OrderForm from '../orderForm/orderForm';
import './orderConfirm.scss';

interface OrderConfirmProps {}

type CartItems = {
  id: string;
  price: number;
  title: string;
  quantity: number;
};

const OrderConfirm: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector<RootState>(
    state => state.order.items
  ) as CartItems[];
  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const tax = totalPrice * 0.11;

  // const cartHasItems = cartItems.length > 0;
  // console.log(cartHasItems);

  const cartItemsOutput = cartItems.map(item => {
    return (
      <li key={item.id}>
        <div>
          <h3>{item.title}</h3>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <OrderForm id={item.id} quantity={item.quantity} />
      </li>
    );
  });

  return (
    <section className="order-confirm">
      <h1>Your order</h1>
      <Link to="/menu">Back to menu</Link>
      <ul>{cartItemsOutput}</ul>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Total: ${(totalPrice + tax).toFixed(2)}</p>
      <Link to="checkout">Proceed to checkout</Link>
    </section>
  );
};

export default OrderConfirm;
