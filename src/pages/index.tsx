import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { login, logout } from '../utils/auth';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div>Hello world</div>
      {user ? (
        <>
          <div>You're logged in as: {user.displayName}</div>
          <button onClick={logout}>LOGOUT</button>
        </>
      ) : (
        <>
          <div>You're not logged in.</div>
          <button onClick={login}>LOGIN</button>
        </>
      )}
    </>
  );
}
