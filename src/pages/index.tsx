import Navbar from '@/components/Navbar';
import CelebrateEntry from '@/types/CelebrateEntry';
import { Edition, EditionProps } from '@/types/Edition';
import Editor from '@/types/Editor';
import GossipEntry from '@/types/GossipEntry';
import { Group, GroupProps } from '@/types/Group';
import MediaEntry from '@/types/MediaEntry';
import PhotoEntry from '@/types/PhotoEntry';
import User from '@/types/User';
import { addEdition } from '@/utils/editions-helpers';
import { addGroup } from '@/utils/groups-helpers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { login, logout } from '../utils/auth';
import UpdateForm from '@/components/UpdateForm';


export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  console.log(user);

  useEffect(() => {
    if (user) {
      router.push('/authenticated');
    }
    const newUser = new User('testId', 'test', 'test', []);
    const newEditor = new Editor('test', 'test');
    const newCelebrateEntry = new CelebrateEntry(newUser, 'test');
    const newMediaEntry = new MediaEntry(newUser, 'test');
    const newPhotoEntry = new PhotoEntry(newUser, 'test');
    const newGossipEntry = new GossipEntry(newUser, 'test');
    const editionProps = {
      title: 'test',
      publishDate: new Date(),
      summary: 'test',
      thingsToCelebrate: [newCelebrateEntry],
      media: [newMediaEntry],
      images: [newPhotoEntry],
      gossipCorner: [newGossipEntry],
    };
    const newEdition = new Edition(editionProps as EditionProps);

    const addEditionToFirebase = async () => {
      await addEdition(newEdition);
    };

    addEditionToFirebase();

    const newGroupProps = {
      name: 'test',
      image: 'test',
      joinCode: 'test',
      users: [newUser],
      editor: newEditor,
      edition: newEdition,
    };

    const newGroup = new Group(newGroupProps as GroupProps);

    const addGroupToFirebase = async () => {
      await addGroup(newGroup);
    };

    // addGroupToFirebase();
  }, [user, router]);

  return (
    <>
      {/* <h1 className="font-dm">expawdition</h1>
      <h1 className="font-orelega">frienditions</h1> */}

      <UpdateForm></UpdateForm>
    </>
  );
}
