import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/about/About';
import AuthPage from './pages/auth/Auth';
import RootLayout from './pages/layout/Root';
import MenuPage from './pages/menu/Menu';
import OrderPage from './pages/order/Order';
import ErrorPage from './pages/error/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <AboutPage /> },
        {
          path: '/order',
          element: <OrderPage />,
        },
        {
          path: '/auth',
          element: <AuthPage />,
        },
        {
          path: '/menu',
          element: <MenuPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
