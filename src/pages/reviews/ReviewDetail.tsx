import { useLoaderData, json, redirect } from 'react-router-dom';
import ReviewDetail from '../../components/reviews/reviewIDetail/ReviewDetail';
import loaderRequest from '../../utlities/loaderRequest';
import { ReviewItem as IReviewItem } from './Reviews';

const baseUrl = import.meta.env.VITE_DATABASE_REVIEWS;

const ReviewDetailPage: React.FC = () => {
  const reviewData = useLoaderData() as IReviewItem;

  return <ReviewDetail review={reviewData} />;
};

export default ReviewDetailPage;

export const action = async ({ request, params }: any) => {
  const reviewId = params.reviewItemId;
  const url = `${baseUrl}/${reviewId}.json`;
  try {
    const res = await fetch(url, { method: request.method });
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
