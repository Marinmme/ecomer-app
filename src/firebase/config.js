// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBqTyMBKKLXZtbh-DOdeKKNnkK1wGdyC7A",
  authDomain: "eshop-54483.firebaseapp.com",
  projectId: "eshop-54483",
  storageBucket: "eshop-54483.appspot.com",
  messagingSenderId: "1096707923447",
  appId: "1:1096707923447:web:b977c09a2e2d4e1ea0e2f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db= getFirestore(app)
export const storage= getStorage(app)
export default app