import ReviewForm from '../../components/reviews/reviewForm/ReviewForm';
import { store } from '../../store';
import { useNavigate, redirect, json } from 'react-router';

interface ReviewItem {
  title: string;
  rating: string;
  description: string;
  userName: string;
  date: Date;
  uid: string;
}

const NewReviewPage: React.FC = () => {
  return <ReviewForm method="post" />;
};

export default NewReviewPage;

export const action = async ({ request, params }: any) => {
  const state = store.getState();
  const uid = state.auth.currentUser.uid;
  console.log(uid);
  const data = await request.formData();
  const URL = import.meta.env.VITE_DATABASE_REVIEWS + '.json';
  const date = new Date();

  const reviewItem = {
    title: data.get('title'),
    rating: data.get('rating'),
    description: data.get('description'),
    userName: data.get('first-name'),
    date,
    uid,
  } as ReviewItem;

  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reviewItem),
  };

  try {
    const response = await fetch(URL, options);

    if (!response) {
      throw json({ message: 'Problem submitting data', status: '500' });
    }

    const data = await response.json();
    console.log(data);

    return redirect('/reviews');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
    }
  }
};
