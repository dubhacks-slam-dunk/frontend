import { Group } from '@/types/Group';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const groupsRef = collection(db, 'groups');

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
