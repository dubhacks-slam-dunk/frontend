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

const usersRef = collection(db, 'users');

export async function addUser(
  userId: string,
  photoURL: string,
  firstName: string,
  lastName: string
) {
  try {
    const docRef = await addDoc(usersRef, {
      uid: userId,
      photoURL: photoURL,
      firstName: firstName,
      lastName: lastName,
      groups: [],
    });
    console.log('User Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addGroupToUser(groupId: any, userId: any) {
  try {
    const userRef = doc(db, 'users', userId);

    // Add the groupId to the list of groups in the specified user
    await updateDoc(userRef, {
      groups: arrayUnion(groupId),
    });

    return true; // Indicate that the operation was successful
  } catch (e) {
    console.error('Error adding group to user:', e);
    throw e;
  }
}

export async function getUserIdFromUid(uid: string) {
  try {
    const q = query(collection(db, 'users'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    const matchingDocuments: any[] = [];
    querySnapshot.forEach(doc => {
      matchingDocuments.push(doc.id);
    });

    return matchingDocuments[0];
  } catch (e) {
    console.error('Error querying Firestore:', e);
    throw e;
  }
}

export async function getGroupIdsFromUser(userId: string) {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      return userData.groups || [];
    } else {
      return [];
    }
  } catch (e) {
    console.error('Error getting group IDs from user:', e);
    throw e;
  }
}

export async function isUserIdAlreadyExists(userId: string) {
  const snapshot = await getDocs(usersRef);
  const userIds = snapshot.docs.map(doc => doc.id);
  return userIds.includes(userId);
}
