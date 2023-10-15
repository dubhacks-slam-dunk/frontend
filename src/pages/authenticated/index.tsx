import Navbar from '@/components/Navbar';
import { auth } from '@/utils/firebase';
import { addUserToGroup, getAllGroupsById } from '@/utils/groups-helpers';
import { getGroupIdsFromUser, getUserIdFromUid } from '@/utils/users-helpers';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const HomePage: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      const getInitialGroupsData = async () => {
        const userId = await getUserIdFromUid(user!.uid);

        const groupsIds = await getGroupIdsFromUser(userId);
        const groupData = await getAllGroupsById(groupsIds);
        console.log('🚀 ~ file: index.tsx:22 ~ getInitialGroupsData ~ groupData :', groupData);
      };

      getInitialGroupsData();

      const joinGroupOnFirebase = async () => {
        const joinCode = 'krRGjj7YiNq6jfdFUpyP'; // temp
        const userId = await getUserIdFromUid(user!.uid);
        addUserToGroup(joinCode, userId);
      };

      // joinGroupOnFirebase();
    }
  }, [router, user]);

  return (
    <div>
      <Navbar isLoggedIn={!!user} />
      <h1>Welcome to the Home Page</h1>
      <p>This is a basic home page component.</p>
    </div>
  );
};

export default HomePage;
