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

export async function addGroup(group: Group, firstEdition: any) {
  try {
    const { name, image, joinCode, users, editor } = group;
    const userIds = users.map(user => user.getId());
    console.log(userIds);
    const docRef = await addDoc(groupsRef, {
      name: name,
      image: image,
      joinCode: joinCode,
      users: userIds,
      editor: editor,
      editions: [firstEdition],
    });

    console.log('Group Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getGroupIdByEditionId(editionId: string) {
  try {
    // Create a query to find the document containing the specified editionId
    const q = query(collection(db, 'groups'), where('editions', 'array-contains', editionId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If there is a matching document, get the groupId
      const groupId = querySnapshot.docs[0].id;
      return groupId;
    } else {
      return null; // No matching document found
    }
  } catch (error) {
    console.error('Error fetching groupId by editionId:', error);
    throw error;
  }
}

export async function getGroupById(groupId: string) {
  try {
    const groupRef = doc(db, 'groups', groupId);
    const groupSnapshot = await getDoc(groupRef);

    if (groupSnapshot.exists()) {
      return { id: groupId, ...groupSnapshot.data() };
    } else {
      throw new Error('Group with provided ID does not exist');
    }
  } catch (e) {
    console.error('Error getting group by ID:', e);
    throw e;
  }
}

export async function addSubsequentEdition(groupId: string, editionId: any) {
  try {
    const groupRef = doc(db, 'groups', groupId);

    // Add the editionId to the list of editionIds in the specified group
    await updateDoc(groupRef, {
      editionIds: arrayUnion(editionId),
    });

    return true; // Indicate that the operation was successful
  } catch (e) {
    console.error('Error adding edition to group:', e);
    throw e;
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
      const docRef = doc(db, 'groups', gid);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { id: gid, data: docSnapshot.data() }; // Include the ID along with the data
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
