import { auth } from '../../firebase';
import { redirect } from 'react-router';

const useIDLoader = (reviewId: string) => {
  const uid = auth.currentUser?.uid;

  if (uid === reviewId) {
    return null;
  } else {
    return redirect('/login');
  }
};

export default useIDLoader;
