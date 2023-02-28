import Card from '../card/Card';
import { uiActions } from '../../../store/uiSlice';
import { useDispatch } from 'react-redux';
import Backdrop from '../backdrop/Backdrop';

interface ModalProps {
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ title, message }) => {
  const dispatch = useDispatch();

  const closeModalHander = () => {
    dispatch(uiActions.closeModal());
  };

  return (
    <>
      <Backdrop onClick={closeModalHander} />
      <Card>
        <dialog></dialog>;
      </Card>
    </>
  );
};

export default Modal;
