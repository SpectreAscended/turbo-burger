import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/about/About';
import LoginPage from './pages/auth/Login';
import SignupPage from './pages/auth/Signup';
import RootLayout from './pages/layout/Root';
import MenuPage, { loader as menuLoader } from './pages/menu/Menu';
import MenuItemPage, {
  loader as menuItemLoader,
} from './pages/menuItem/MenuItem';
import OrderPage from './pages/order/Order';
import ErrorPage from './pages/error/Error';

interface MenuLoaderProps {
  params: {
    menuItemId: string;
  };
}

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
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/signup',
          element: <SignupPage />,
        },
        {
          path: '/menu',
          children: [
            {
              index: true,
              element: <MenuPage />,
              loader: menuLoader,
            },
            {
              path: ':menuItemId',
              element: <MenuItemPage />,
              id: 'menu-item',
              loader: menuItemLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
