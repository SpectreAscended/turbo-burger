import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import classes from './OrderBtn.module.css';
import './orderBtn.scss';

const OrderBtn: React.FC = () => {
  const [bounce, setBounce] = useState(false);

  const btnBounceHandler = () => {
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
      <div className="badge">4</div>
    </Link>
  );
};

export default OrderBtn;
