import {initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnCHEuuUJAfk6M3L56Cd3lCF6YCf9IHBQ",
  authDomain: "react-learn-33b5e.firebaseapp.com",
  projectId: "react-learn-33b5e",
  storageBucket: "react-learn-33b5e.appspot.com",
  messagingSenderId: "686882217133",
  appId: "1:686882217133:web:cbb2655ee1cb12e9c57a24",
  measurementId: "G-LZY2P04HVB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const authentication = getAuth();

export const fireStore = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =  () => signInWithPopup(authentication,provider);
