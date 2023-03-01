import { motion } from 'framer-motion';
import Backdrop from '../backdrop/Backdrop';
import './modal.scss';

interface ModalProps {
  handleClose: () => void;
  modalOpen: boolean;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ handleClose, text, modalOpen }) => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        bounce: 0.25,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className="modal2"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="modal2-text">{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
