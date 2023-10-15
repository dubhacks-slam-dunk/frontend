import CelebrateEntry from '@/types/CelebrateEntry';
import GossipEntry from '@/types/GossipEntry';
import MediaEntry from '@/types/MediaEntry';
import PhotoEntry from '@/types/PhotoEntry';
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

const celebrateEntriesRef = collection(db, 'celebrateEntries');
const mediaEntriesRef = collection(db, 'mediaEntries');
const photoEntriesRef = collection(db, 'photoEntries');
const gossipEntriesRef = collection(db, 'gossipEntries');

export async function addCelebrateEntry(celebrateEntry: CelebrateEntry) {
  try {
    const { user, entry } = celebrateEntry;
    const docRef = await addDoc(celebrateEntriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('CelebrateEntry Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function updatePhotoEntry(photoEntryID: any, editionId: any) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    await updateDoc(editionRef, {
      images: arrayUnion(photoEntryID),
    });

    return true; // Indicate that the operation was successful
  } catch (e) {
    console.error('Error updating celebrate entry:', e);
    throw e;
  }
}

export async function updateMediaEntry(mediaEntryId: any, editionId: any) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    await updateDoc(editionRef, {
      media: arrayUnion(mediaEntryId),
    });

    return true; // Indicate that the operation was successful
  } catch (e) {
    console.error('Error updating celebrate entry:', e);
    throw e;
  }
}
export async function updateGossipEntry(gossipEntryId: any, editionId: any) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    await updateDoc(editionRef, {
      gossipCorner: arrayUnion(gossipEntryId),
    });

    return true; // Indicate that the operation was successful
  } catch (e) {
    console.error('Error updating celebrate entry:', e);
    throw e;
  }
}

export async function updateCelebrateEntry(celebrateEntryId: any, editionId: any) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    // Add the celebrateEntryId to the list of thingsToCelebrate in the specified edition
    await updateDoc(editionRef, {
      thingsToCelebrate: arrayUnion(celebrateEntryId),
    });

    return true; // Indicate that the operation was successful
  } catch (e) {
    console.error('Error updating celebrate entry:', e);
    throw e;
  }
}

export async function addMediaEntry(mediaEntry: MediaEntry) {
  try {
    const { user, entry } = mediaEntry;
    const docRef = await addDoc(mediaEntriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('MediaEntry Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addPhotoEntry(photoEntry: PhotoEntry) {
  try {
    const { user, entry } = photoEntry;
    const docRef = await addDoc(photoEntriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('PhotoEntry Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addGossipEntry(gossipEntry: GossipEntry) {
  try {
    const { user, entry } = gossipEntry;
    const docRef = await addDoc(gossipEntriesRef, {
      userId: user.getId(),
      entry: entry,
    });
    console.log('GossipEntry Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
