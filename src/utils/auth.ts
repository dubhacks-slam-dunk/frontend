import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

interface FirebaseError extends Error {
  code: string;
}

export const googleAuth = new GoogleAuthProvider();

export const login = async () => {
  try {
    const result: any = await signInWithPopup(auth, googleAuth);
    return result;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    if (firebaseError.code === 'auth/popup-closed-by-user') {
      console.log('Popup closed by the user.');
      return null;
    } else {
      console.error('An unknown error occurred:', firebaseError);
      return null;
    }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('Successfully logged out');
  } catch (error) {
    console.error('An error occurred while logging out:', error);
  }
};
