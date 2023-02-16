import React from 'react';
import { Link } from 'react-router-dom';
import classes from './OrderBtn.module.css';

const OrderBtn: React.FC = () => {
  return (
    <Link to="/order" className={classes.order}>
      Your Order
      <div className={classes.badge}>4</div>
    </Link>
  );
};

export default OrderBtn;
