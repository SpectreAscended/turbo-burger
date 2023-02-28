import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import OrderForm from '../orderForm/OrderForm';
import { SK_SALES_TAX } from '../../../utlities/appConfig';
import './orderConfirm.scss';

interface OrderConfirmProps {}

type CartItems = {
  id: string;
  price: number;
  title: string;
  quantity: number;
  drinkOption?: string;
};

const OrderConfirm: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector<RootState>(
    state => state.order.items
  ) as CartItems[];
  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const cartHasItems = cartItems.length > 0;

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
      {cartHasItems ? (
        <>
          <ul>{cartItemsOutput}</ul>
          <div className="order-confirm-total">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <Link to="checkout">Proceed to checkout</Link>
          </div>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </section>
  );
};

export default OrderConfirm;
