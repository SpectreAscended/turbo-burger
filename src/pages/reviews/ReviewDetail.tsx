import { useLoaderData } from 'react-router';
import ReviewDetail from '../../components/reviews/reviewIDetail/ReviewDetail';
import loaderRequest from '../../utlities/loaderRequest';
import { ReviewItem as IReviewItem } from './Reviews';

const ReviewDetailPage: React.FC = () => {
  const reviewData = useLoaderData() as IReviewItem;

  return <ReviewDetail review={reviewData} />;
};

export default ReviewDetailPage;

export const loader = async ({ params }: any) => {
  const baseUrl = import.meta.env.VITE_DATABASE_REVIEWS;
  const reviewId = params.reviewItemId;
  const url = `${baseUrl}/${reviewId}.json`;

  const data = await loaderRequest({ url });

  return data;
};
