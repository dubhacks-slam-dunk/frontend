import { Group } from '@/types/Group';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
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

export async function getAllGroupsById(groupIds: string[]) {
  try {
    const groupPromises = groupIds.map(async gid => {
      const docRef = doc(db, 'groups', gid); // Replace 'yourCollection' with your actual collection name
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return docSnapshot.data();
      } else {
        return null;
      }
    });

    const groupData = await Promise.all(groupPromises);
    console.log(groupData);

    return groupData.filter(Boolean); // Filter out null values (non-existent documents)
  } catch (e) {
    console.error('Error processing groupIds', e);
  }
}
