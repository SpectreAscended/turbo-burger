import { useLoaderData } from 'react-router';
import ReviewsList from '../../components/reviews/reviewsList/ReviewsList';
import loaderRequest from '../../utlities/loaderRequest';
import formatAPIData from '../../utlities/formatAPIData';

export interface ReviewItem {
  id: string;
  date: Date;
  description: string;
  rating: string;
  title: string;
  uid: string;
  userName: string;
}

const ReviewsPage: React.FC = () => {
  const data = useLoaderData() as ReviewItem;

  const reviews = formatAPIData(data) as ReviewItem[];
  console.log(reviews);

  return <ReviewsList reviews={reviews} />;
};

export default ReviewsPage;

export const loader = async () => {
  const url = import.meta.env.VITE_DATABASE_REVIEWS + '.json';

  const data = await loaderRequest({ url });

  return data;
};
