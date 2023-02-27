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
import CheckoutPage from './pages/checkout/Checkout';

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
          children: [
            {
              index: true,
              element: <OrderPage />,
            },
            {
              path: 'checkout',
              element: <CheckoutPage />,
            },
          ],
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

  // const foo =  [{id: 'dr1-5464', type: 'root beer'}, {id: 'dr2-123', type: 'root-beer'}, {id: 'dr1'}]

  // const bar = foo.find

  // console.log(bar)

  return <RouterProvider router={router} />;
};

export default App;
