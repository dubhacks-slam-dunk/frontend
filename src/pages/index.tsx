import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { login, logout } from '../utils/auth';
import UpdateForm from '@/components/UpdateForm';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // do something if the user changes
  }, [user]);

  return (
    <>
      {/* <h1 className="font-dm">expawdition</h1>
      <h1 className="font-orelega">frienditions</h1> */}

      <UpdateForm></UpdateForm>
    </>
  );
}
