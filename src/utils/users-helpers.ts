import User from '@/types/User';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const usersRef = collection(db, 'users');

export async function addUser(user: User) {
  try {
    const { name, groups } = user;
    const docRef = await addDoc(usersRef, {
      name: name,
      groups: groups,
    });
    console.log('User Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
