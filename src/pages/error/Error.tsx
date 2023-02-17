import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../../components/header/Header';
import classes from './Error.module.css';

interface ErrorPageProps {}

const ErrorPage = () => {
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
        <section className={classes.error}>
          <h2>{title}</h2>
          <p>{message}</p>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;