// Import the functions you need from the SDKs you need
import Group from '@/types/Group';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBCnQJxn9NDeNyfJY-GjnVxIiRNyuoD1j4',
  authDomain: 'friendition-d7dde.firebaseapp.com',
  projectId: 'friendition-d7dde',
  storageBucket: 'friendition-d7dde.appspot.com',
  messagingSenderId: '906747365643',
  appId: '1:906747365643:web:da8e6c644301e4c650ba0e',
  measurementId: 'G-VMYP3CFBX0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

const usersRef = collection(db, 'users');
const groupsRef = collection(db, 'groups');
const editionsRef = collection(db, 'editions');

// write all data modifying functions here
export async function addGroup(group: Group) {
  try {
    const { name, image, joinCode, users, editor, edition } = group;
    const docRef = await addDoc(groupsRef, {
      name: name,
      image: image,
      joinCode: joinCode,
      users: users,
      editor: editor,
      edition: edition,
    });
    console.log('Group Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
