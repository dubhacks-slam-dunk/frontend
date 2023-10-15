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
import {
  addCelebrateEntry,
  addGossipEntry,
  addMediaEntry,
  addPhotoEntry,
} from '@/utils/entries-helper';
import { addGroup, addUserToGroup } from '@/utils/groups-helpers';
import { getUserIdFromUid } from '@/utils/users-helpers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  console.log(user);

  useEffect(() => {
    if (user) {
      router.push('/authenticated');
    } else {
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

      const addEntriesToFirebase = async () => {
        const celebrateEntryId = await addCelebrateEntry(newCelebrateEntry);
        const mediaEntryId = await addMediaEntry(newMediaEntry);
        const photoEntryId = await addPhotoEntry(newPhotoEntry);
        const gossipEntryId = await addGossipEntry(newGossipEntry);
        const entryIds = [celebrateEntryId, mediaEntryId, photoEntryId, gossipEntryId];
      };

      // addEntriesToFirebase();

      const addEditionToFirebase = async () => {
        await addEdition(newEdition);
      };

      // addEditionToFirebase();

      const newGroupProps = {
        name: 'test',
        image: 'test',
        users: [newUser],
        editor: 'ai-personality-name', // to be hardcoded as consts
        editions: [],
      };

      const newGroup = new Group(newGroupProps as GroupProps);

      const addGroupToFirebase = async () => {
        const joinCode = await addGroup(newGroup);
        console.log('🚀 ~ file: index.tsx:78 ~ addGroupToFirebase ~ joinCode:', joinCode);
      };

      // addGroupToFirebase();
    }
  }, [user, router]);

  return (
    <>
      <Navbar isLoggedIn={!!user} />
      <div>Hello world</div>
    </>
  );
}
