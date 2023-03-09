import ReviewForm from '../../components/reviews/reviewForm/ReviewForm';
import loaderRequest from '../../utlities/loaderRequest';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

interface FormData {
  id: string;
  userName: string;
  rating: number;
  title: string;
  description: string;
}

const NewReviewPage: React.FC = () => {
  return <ReviewForm method="post" />;
};

export default NewReviewPage;

export const action = async ({ request, params }: any) => {
  const uid = useSelector<RootState>(state => state.auth.uid) as string;
  //   const id = params.reviewItemId;
  const data = (await request.formData()) as FormData;
  const URL = import.meta.env.VITE_DATABASE_REVIEWS;
  const date = new Date();
  console.log('new review action running');

  const reviewItem = {
    id: data.id,
    title: data.title,
    rating: data.rating,
    description: data.description,
    userName: data.userName,
    date,
    uid,
  };

  const requestConfig = {
    url: `${URL}.json`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviewItem),
  };

  const response = loaderRequest(requestConfig);
  console.log(response);
};
