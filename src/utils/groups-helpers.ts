import { Group } from '@/types/Group';
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

const groupsRef = collection(db, 'groups');

export async function addGroup(group: Group) {
  try {
    const { name, image, joinCode, users, editor, editions } = group;
    const userIds = users.map(user => user.getId());
    console.log(userIds);
    const docRef = await addDoc(groupsRef, {
      name: name,
      image: image,
      joinCode: joinCode,
      users: userIds,
      editor: editor,
      editions: editions,
    });

    console.log('Group Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addUserToGroup(joinCode: string, userId: string) {
  try {
    const groupsRef = collection(db, 'groups'); // Assuming 'groups' is the collection name
    const querySnapshot = await getDocs(query(groupsRef, where('joinCode', '==', joinCode)));

    if (!querySnapshot.empty) {
      const groupDoc = querySnapshot.docs[0];
      const updatedUsersList = arrayUnion(userId);
      await updateDoc(groupDoc.ref, { users: updatedUsersList });

      return true; // Indicate that the operation was successful
    } else {
      throw new Error('Group with provided joinCode does not exist');
    }
  } catch (e) {
    console.error('Error adding user to group:', e);
    throw e;
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
