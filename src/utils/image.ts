import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

export const uploadImage = async (file: File) => {
  const storageRef = ref(storage, `images/${file.name}`);
  
  const snapshot = await uploadBytes(storageRef, file);
  
  const url = await getDownloadURL(storageRef);
  
  return url;
};

export const getImage = async (path: string) => {
  const storageRef = ref(storage, path);
  
  const url = await getDownloadURL(storageRef);
  
  return url;
}
