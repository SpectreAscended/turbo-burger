import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiActions } from '../../store/uiSlice';
import './orderBtn.scss';

const OrderBtn: React.FC = () => {
  const [bounce, setBounce] = useState(false);
  const dispatch = useDispatch();

  const btnBounceHandler = () => {
    dispatch(uiActions.closeMenu());
    setBounce(true);
    const timeout = setTimeout(() => {
      setBounce(false);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  };

  const orderClasses = `order ${bounce ? 'animate-bump' : ''}`;

  return (
    <Link to="/order" className={orderClasses} onClick={btnBounceHandler}>
      Your Order
      <div className="order-badge">4</div>
    </Link>
  );
};

export default OrderBtn;
