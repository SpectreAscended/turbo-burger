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
import ReviewsPage, { loader as reviewsLoader } from './pages/reviews/Reviews';
import ReviewDetailPage, {
  loader as reviewLoader,
  action as reviewDeleteAction,
} from './pages/reviews/ReviewDetail';
import NewReviewPage, {
  action as reviewFormAction,
} from './pages/reviews/NewReview';
import EditReviewPage from './pages/reviews/EditReview';
import { checkAuthLoader, tokenLoader } from './utlities/auth';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: 'root',
      // loader: tokenLoader,
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
        {
          path: '/reviews',
          children: [
            {
              index: true,
              element: <ReviewsPage />,
              loader: reviewsLoader,
            },
            {
              path: 'new',
              element: <NewReviewPage />,
              action: reviewFormAction,
              loader: checkAuthLoader,
            },
            {
              path: ':reviewItemId',
              id: 'review-item',
              loader: reviewLoader,
              children: [
                {
                  index: true,
                  element: <ReviewDetailPage />,
                  action: reviewDeleteAction,
                },
                {
                  path: 'edit',
                  element: <EditReviewPage />,
                  action: reviewFormAction,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
