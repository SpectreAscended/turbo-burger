import { useRouteLoaderData, json, redirect } from 'react-router-dom';
import ReviewDetail from '../../components/reviews/reviewIDetail/ReviewDetail';
import loaderRequest from '../../utlities/loaderRequest';
import { ReviewItem as IReviewItem } from './Reviews';

const baseUrl = import.meta.env.VITE_DATABASE_REVIEWS;

const ReviewDetailPage: React.FC = () => {
  const reviewData = useRouteLoaderData('review-item') as IReviewItem;

  return <ReviewDetail review={reviewData} />;
};

export default ReviewDetailPage;

export const action = async ({ request, params }: any) => {
  console.log('running');
  const reviewId = params.reviewItemId;
  const URL = `${baseUrl}/${reviewId}.json`;
  const method = request.method;
  try {
    const res = await fetch(URL, { method: method });
    if (!res.ok) {
      throw json({ message: 'Could not delete review', status: 500 });
    }

    return redirect('/reviews');
  } catch (err) {}
};

export const loader = async ({ params }: any) => {
  const reviewId = params.reviewItemId;
  const url = `${baseUrl}/${reviewId}.json`;

  const data = await loaderRequest({ url });

  return data;
};
