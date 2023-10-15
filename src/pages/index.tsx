import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { login, logout } from '../utils/auth';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // do something if the user changes
  }, [user]);

  return (
    <>
      <div>Hello world</div>
    </>
  );
}
