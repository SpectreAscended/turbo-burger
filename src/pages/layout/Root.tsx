import { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../utlities/ScrollToTop';
import Modal from '../../components/UI/modal/modal/Modal';
import { uiActions } from '../../store/uiSlice';
import { authActions } from '../../store/authSlice';
import { RootState } from '../../store';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenDuration } from '../../utlities/auth';
import { auth } from '../../../firebase';

const RootLayout: React.FC = () => {
  const dispatch = useDispatch();

  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    const tokenDuration = getTokenDuration() as number;

    if (token === 'EXPIRED') {
      dispatch(authActions.signOut());
      return;
    }

    const userName = auth.currentUser?.displayName;
    const uid = auth.currentUser?.uid;
    dispatch(authActions.setUser({ userName, uid, isAuthenticated: true }));

    setTimeout(() => {
      dispatch(authActions.signOut());
    }, tokenDuration);
  }, [token, auth.currentUser]);

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
          <Modal
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
