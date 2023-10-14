import { addDoc, collection } from 'firebase/firestore';
import db from './firebase';

const firebaseHelpers = {};
try {
  const docRef = await addDoc(collection(db, 'users'), {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
  console.log('Document written with ID: ', docRef.id);
} catch (e) {
  console.error('Error adding document: ', e);
}
