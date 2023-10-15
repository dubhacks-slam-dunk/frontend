import Navbar from '@/components/Navbar';
import UpdateForm from '@/components/UpdateForm';
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
import { addGroup, addSubsequentEdition } from '@/utils/groups-helpers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { login, logout } from '@/utils/auth';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    } else {
      const newUser = new User('testId', 'test', 'test', []);
      const newEditor = new Editor('test', 'test');
      const newCelebrateEntry = new CelebrateEntry(newUser, 'test');
      const newMediaEntry = new MediaEntry(newUser, 'test');
      const newPhotoEntry = new PhotoEntry(newUser, 'test');
      const newGossipEntry = new GossipEntry(newUser, 'test');

      const addEntriesToFirebase = async () => {
        const celebrateEntryId = await addCelebrateEntry(newCelebrateEntry);
        const mediaEntryId = await addMediaEntry(newMediaEntry);
        const photoEntryId = await addPhotoEntry(newPhotoEntry);
        const gossipEntryId = await addGossipEntry(newGossipEntry);
        const entryIds = [celebrateEntryId, mediaEntryId, photoEntryId, gossipEntryId];
      };

      // addEntriesToFirebase();

      const generateRandomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';

        for (let i = 0; i < 4; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters[randomIndex];
        }

        return code;
      };

      const editionProps = {
        title: 'test',
        publishDate: new Date(),
        summary: 'test',
        thingsToCelebrate: [],
        media: [],
        photoEntries: [],
        gossipCorner: [],
        signOff: 'test',
      };
      const newEdition = new Edition(editionProps as EditionProps);

      const newGroupProps = {
        name: 'test',
        image: 'test',
        joinCode: generateRandomCode(),
        users: [newUser],
        editor: 'ai-personality-name', // to be hardcoded as consts
        editions: [newEdition],
      };

      const newGroup = new Group(newGroupProps as GroupProps);

      const addGroupToFirebase = async () => {
        const editionId = await addEdition(newEdition);
        const groupId = await addGroup(newGroup, editionId);
        // const userId = await getUserIdFromUid(user.uid);
        // await addGroupToUser(groupId);
      };

      // addGroupToFirebase();

      const addAnotherEditionToGroup = async () => {
        const editionProps = {
          title: 'another test',
          publishDate: new Date(),
          summary: 'another test',
          thingsToCelebrate: [],
          media: [],
          photoEntries: [],
          gossipCorner: [],
          signOff: 'another test',
        };
        const newEdition = new Edition(editionProps as EditionProps);
        const editionId = await addEdition(newEdition);
        await addSubsequentEdition('5Uif4kMIDTq0slIA1wJ0', editionId);
      };

      // addAnotherEditionToGroup();
    }
  }, [user, router]);

  return (
    <>
      <button onClick={logout}>
        Logout
      </button>
    </>
  );
}
