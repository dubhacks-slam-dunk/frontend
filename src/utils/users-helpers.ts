import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const usersRef = collection(db, 'users');

export async function addUser(userId: string, firstName: string, lastName: string) {
  try {
    const docRef = await addDoc(usersRef, {
      uid: userId,
      firstName: firstName,
      lastName: lastName,
      groups: [],
    });
    console.log('User Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function isUserIdAlreadyExists(userId: string) {
  const snapshot = await getDocs(usersRef);
  const userIds = snapshot.docs.map(doc => doc.id);
  return userIds.includes(userId);
}
