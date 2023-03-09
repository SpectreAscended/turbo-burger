import ReviewDetail from '../../components/reviews/reviewIDetail/ReviewDetail';

interface LoaderProps {
  params: {
    reviewItemId: string;
  };
}

const ReviewDetailPage: React.FC = () => {
  return <ReviewDetail />;
};

export default ReviewDetailPage;

export const loader = async ({ params }: any) => {
  const url = import.meta.env.VITE_DATABASE_REVIEWS;
  const reviewId = params.reviewItemId;

  return null;
};
