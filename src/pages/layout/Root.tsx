import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../utlities/ScrollToTop';
import Modal2 from '../../components/UI/modal/modal/Modal';
import { uiActions } from '../../store/uiSlice';
import { RootState } from '../../store';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

const RootLayout: React.FC = () => {
  const dispatch = useDispatch();

  const modalOpen = useSelector<RootState>(
    state => state.ui.modalOpen
  ) as boolean;

  const closeModalHandler = () => {
    dispatch(uiActions.closeModal());
  };

  return (
    <>
      <AnimatePresence initial={false} mode="sync">
        {modalOpen && (
          <Modal2
            handleClose={closeModalHandler}
            modalOpen={modalOpen}
            title="Order placed!"
            text="Thank you for shopping at Turbo Burger!"
          />
        )}
      </AnimatePresence>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
