import React from 'react';
import { motion } from 'framer-motion';
import './backdrop.scss';

interface IBackdrop {
  children?: any;
  onClick: () => void;
}

const Backdrop: React.FC<IBackdrop> = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
