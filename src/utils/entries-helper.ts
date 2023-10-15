import CelebrateEntry from '@/types/CelebrateEntry';
import GossipEntry from '@/types/GossipEntry';
import MediaEntry from '@/types/MediaEntry';
import PhotoEntry from '@/types/PhotoEntry';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
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

export async function updatePhotoEntry(photoEntryUrl: string, editionId: string) {
  try {
    console.log(`Updating photo entry for edition: ${editionId}`);

    const editionRef = doc(db, 'editions', editionId);
    const editionSnapshot = await getDoc(editionRef);

    if (!editionSnapshot.exists()) {
      console.error(`Document with id ${editionId} does not exist.`);
      return;
    }

    const images = editionSnapshot.data()?.images || [];

    if (!images.some((image: any) => image.url === photoEntryUrl)) {
      // Photo entry with the same URL doesn't exist, create a new one
      const photoEntryRef = await addDoc(photoEntriesRef, {
        url: photoEntryUrl, // Set the URL for the new photo entry
        // Add other properties for photoEntry
      });

      // Get the id of the newly created photoEntry
      const newPhotoEntryId = photoEntryRef.id;

      // Add the newPhotoEntryId to images in the specified edition
      await updateDoc(editionRef, {
        images: arrayUnion({ id: newPhotoEntryId, url: photoEntryUrl }), // Store id and url
      });

      return newPhotoEntryId; // Return the id of the newly created photoEntry
    }

    // If photo entry with the same URL exists, return its id
    const existingPhotoEntry = images.find((image: any) => image.url === photoEntryUrl);
    return existingPhotoEntry?.id;
  } catch (e: any) {
    if (e.code === 'unavailable') {
      console.error('Error updating photo entry: Firebase is unavailable.');
    }
    console.error('Error updating photo entry:', e);
    throw e;
  }
}

export async function updateMediaEntry(content: string, type: string, editionId: string) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    // Check if media entry with the same content and type exists
    const editionSnapshot = await getDoc(editionRef);
    const media = editionSnapshot.data()?.media || [];

    if (!media.some((entry: any) => entry.content === content && entry.type === type)) {
      // Media entry with the same content and type doesn't exist, create a new one
      const mediaEntryRef = await addDoc(collection(db, 'mediaEntries'), {
        content: content,
        type: type,
        // Add other properties for mediaEntry
      });

      // Get the id of the newly created mediaEntry
      const newMediaEntryId = mediaEntryRef.id;

      // Add the newMediaEntryId to media in the specified edition
      await updateDoc(editionRef, {
        media: arrayUnion({ id: newMediaEntryId, content: content, type: type }), // Store id, content, and type
      });

      return newMediaEntryId; // Return the id of the newly created mediaEntry
    }

    // If media entry with the same content and type exists, return its id
    const existingMediaEntry = media.find(
      (entry: any) => entry.content === content && entry.type === type
    );
    return existingMediaEntry?.id;
  } catch (e) {
    console.error('Error updating media entry:', e);
    throw e;
  }
}

export async function getCelebrateEntriesByJoinCode(joinCode: any) {
  try {
    const groupsRef = collection(db, 'groups');

    // Create a query with a condition (where clause)
    const q = query(groupsRef, where('joinCode', '==', joinCode));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('No group found with the provided join code');
    }

    const groupDoc = querySnapshot.docs[0]; // Assuming joinCode is unique, so we take the first match
    const groupData = groupDoc.data();

    // Assuming celebrateEntries is a field in the group document
    const celebrateEntries = groupData.celebrateEntries || [];

    return celebrateEntries;
  } catch (error) {
    console.error('Error getting celebrate entries:', error);
    throw error;
  }
}

export async function updateGossipEntry(content: string, editionId: string) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    // Check if gossip entry with the same content exists
    const editionSnapshot = await getDoc(editionRef);
    const gossip = editionSnapshot.data()?.gossipCorner || [];

    if (!gossip.some((entry: any) => entry.content === content)) {
      // Gossip entry with the same content doesn't exist, create a new one
      const gossipEntryRef = await addDoc(collection(db, 'gossipEntries'), {
        content: content,
        // Add other properties for gossipEntry
      });

      // Get the id of the newly created gossipEntry
      const newGossipEntryId = gossipEntryRef.id;

      // Add the newGossipEntryId to gossipCorner in the specified edition
      await updateDoc(editionRef, {
        gossipCorner: arrayUnion({ id: newGossipEntryId, content: content }), // Store id and content
      });

      return newGossipEntryId; // Return the id of the newly created gossipEntry
    }

    // If gossip entry with the same content exists, return its id
    const existingGossipEntry = gossip.find((entry: any) => entry.content === content);
    return existingGossipEntry?.id;
  } catch (e) {
    console.error('Error updating gossip entry:', e);
    throw e;
  }
}

export async function updateCelebrateEntry(content: string, editionId: string) {
  try {
    const editionRef = doc(db, 'editions', editionId);

    // Check if celebration entry with the same content exists
    const editionSnapshot = await getDoc(editionRef);
    const celebrations = editionSnapshot.data()?.thingsToCelebrate || [];

    if (!celebrations.some((entry: any) => entry.content === content)) {
      // Celebration entry with the same content doesn't exist, create a new one
      const celebrateEntryRef = await addDoc(collection(db, 'celebrateEntries'), {
        content: content,
        // Add other properties for celebrateEntry
      });

      // Get the id of the newly created celebrateEntry
      const newCelebrateEntryId = celebrateEntryRef.id;

      // Add the newCelebrateEntryId to thingsToCelebrate in the specified edition
      await updateDoc(editionRef, {
        thingsToCelebrate: arrayUnion({ id: newCelebrateEntryId, content: content }), // Store id and content
      });

      return newCelebrateEntryId; // Return the id of the newly created celebrateEntry
    }

    // If celebration entry with the same content exists, return its id
    const existingCelebrateEntry = celebrations.find((entry: any) => entry.content === content);
    return existingCelebrateEntry?.id;
  } catch (e) {
    console.error('Error updating celebrate entry:', e);
    throw e;
  }
}

export async function addMediaEntry(mediaEntry: MediaEntry) {
  try {
    const { user, entry, type } = mediaEntry;
    const docRef = await addDoc(mediaEntriesRef, {
      userId: user.getId(),
      entry: entry,
      type: type,
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
