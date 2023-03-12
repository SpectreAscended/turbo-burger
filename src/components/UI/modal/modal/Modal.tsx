import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion } from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';
import './modal.scss';

interface ModalProps {
  handleClose: () => void;
  modalOpen: boolean;
  text: string;
  title?: string;
  type: string;
}

const Modal: React.FC<ModalProps> = ({
  handleClose,
  text,
  modalOpen,
  title,
  type,
}) => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.75,
        type: 'spring',
        bounce: 0.25,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  // useEffect(() => {
  //   const handleBackButton = () => {
  //     handleClose();
  //   };
  //   // Closes the modal when the back button is pressed.
  //   window.onpopstate = handleBackButton;

  //   return () => {
  //     window.onpopstate = null;
  //   };
  // }, []);

  let actions = (
    <div className="modal__actions">
      <button className="modal-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );

  if (type === 'prompt') {
    actions = (
      <div className="modal__actions--prompt">
        <button className="modal-button--cancel">Cancel</button>
        <button className="modal-button--confirm">Confirm</button>
      </div>
    );
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="modal-title">{title}</h2>
        <p className="modal-text">{text}</p>
        {actions}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
