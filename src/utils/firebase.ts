// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
