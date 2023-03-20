import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';
import OrderForm from '../orderForm/OrderForm';
import './orderConfirm.scss';

type CartItems = {
  id: string;
  price: number;
  title: string;
  quantity: number;
  drinkOption?: string;
};

const OrderConfirm: React.FC = () => {
  const cartItems = useSelector<RootState>(
    state => state.order.items
  ) as CartItems[];

  const totalPrice = useSelector<RootState>(
    state => state.order.totalPrice
  ) as number;

  const cartHasItems = cartItems.length > 0;

  const cartItemsOutput = cartItems.map(item => {
    return (
      <li key={item.id} className={'order-confirm__item'}>
        <div>
          <h3 className="order-confirm__item-title">{item.title}</h3>
          <p className="order-confirm__price">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        <OrderForm id={item.id} quantity={item.quantity} />
      </li>
    );
  });

  return (
    <section className="order-confirm">
      <h1 className="order-confirm__heading">Your order</h1>

      {cartHasItems ? (
        <>
          <ul className="order-confirm__list">{cartItemsOutput}</ul>
          <div className="order-confirm-total">
            <p className="order-confirm__price">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <div className="order-confirm__actions">
              <Link to="/menu" className="order-confirm__link--back">
                Back to menu
              </Link>
              <Link to="checkout" className="order-confirm__link--checkout">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="order-confirm__empty-cart">Cart is empty</p>
          <div className="order-confirm__actions">
            <Link to="/menu" className="order-confirm__link--back">
              Back to menu
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default OrderConfirm;
