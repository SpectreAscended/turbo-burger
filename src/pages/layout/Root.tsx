import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../utlities/ScrollToTop';

const RootLayout: React.FC = () => {
  return (
    <>
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
