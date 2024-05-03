// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1bPRC_XQ9B5T3tsT7c3LUWmRWPCPioHU",
  authDomain: "react-cursos-1327f.firebaseapp.com",
  projectId: "react-cursos-1327f",
  storageBucket: "react-cursos-1327f.appspot.com",
  messagingSenderId: "68041291584",
  appId: "1:68041291584:web:08145f763a74b4dc426ca5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );