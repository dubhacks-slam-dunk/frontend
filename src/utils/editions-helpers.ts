import { Edition } from '@/types/Edition';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const editionsRef = collection(db, 'editions');

export async function addEdition(edition: Edition) {
  try {
    const {
      title,
      publishDate,
      summary,
      thingsToCelebrate,
      media,
      photoEntries,
      gossipCorner,
      signOff,
    } = edition;

    const docRef = await addDoc(editionsRef, {
      title: title,
      publishDate: publishDate,
      summary: summary,
      thingsToCelebrate: thingsToCelebrate,
      media: media,
      photoEntries: photoEntries,
      gossipCorner: gossipCorner,
      signOff: signOff,
    });
    console.log('Edition Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getEditionsByEditionId(editionIds: any) {
  try {
    const editionData = [];

    for (const editionId of editionIds) {
      const editionRef = doc(db, 'editions', editionId);
      const editionSnapshot = await getDoc(editionRef);

      if (editionSnapshot.exists()) {
        editionData.push({ id: editionId, ...editionSnapshot.data() });
      } else {
        throw new Error(`Edition with ID ${editionId} does not exist`);
      }
    }

    return editionData;
  } catch (e) {
    console.error('Error getting editions by ID:', e);
    throw e;
  }
}
