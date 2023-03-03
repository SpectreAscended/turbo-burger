import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './error.scss';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();

  let title = 'An error occured!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <Header />
      <main>
        <section className="error">
          <h2>{title}</h2>
          <p>{message}</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
