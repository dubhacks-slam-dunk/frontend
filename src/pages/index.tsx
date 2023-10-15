import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // do something if the user changes
  }, [user]);

  return (
    <>
      <Navbar isLoggedIn={!!user} />
      <div>Hello world</div>
    </>
  );
}
