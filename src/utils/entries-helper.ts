import CelebrateEntry from '@/types/CelebrateEntry';
import GossipEntry from '@/types/GossipEntry';
import MediaEntry from '@/types/MediaEntry';
import PhotoEntry from '@/types/PhotoEntry';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const entriesRef = collection(db, 'entries');

export async function addCelebrateEntry(celebrateEntry: CelebrateEntry) {
  try {
    const { user, entry } = celebrateEntry;
    const docRef = await addDoc(entriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('CelebrateEntry Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addMediaEntry(mediaEntry: MediaEntry) {
  try {
    const { user, entry } = mediaEntry;
    const docRef = await addDoc(entriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('MediaEntry Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addPhotoEntry(photoEntry: PhotoEntry) {
  try {
    const { user, entry } = photoEntry;
    const docRef = await addDoc(entriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('PhotoEntry Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addGossipEntry(gossipEntry: GossipEntry) {
  try {
    const { user, entry } = gossipEntry;
    const docRef = await addDoc(entriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('GossipEntry Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
