import { auth } from '../../firebase';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    const user = userCredential.user;

    if (!user) {
      throw new Error('Problem signing in.');
    }

    const accessToken = await user?.getIdToken();

    const currentUser = {
      id: user.uid,
      userName: user.displayName,
      accessToken,
    };

    return currentUser;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    return {
      message: 'Problem signing in',
    };
  }
};

export const tokenLoader = () => {};

// export const signIn = async (email: string, password: string) => {
//   try {
//     const userCredential = await auth.signInWithEmailAndPassword(
//       email,
//       password
//     );

//     const user = userCredential.user;

//     const accessToken = user?.getIdToken ? await user.getIdToken() : null;

//     if (!user) {
//       throw new Error('Problem signing in.');
//     }

//     const currentUser = {
//       id: user.uid,
//       userName: user.displayName,
//       accessToken,
//     };

//     return currentUser;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error(err.message);
//     }
//   }
// };
