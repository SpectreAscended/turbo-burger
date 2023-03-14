import { useRouteLoaderData } from 'react-router';
import ReviewForm from '../../components/reviews/reviewForm/ReviewForm';
import { ReviewItem as IReviewItem } from './Reviews';

const EditReviewPage: React.FC = () => {
  const review = useRouteLoaderData('review-item') as IReviewItem;

  return <ReviewForm method="patch" review={review} />;
};

export default EditReviewPage;
