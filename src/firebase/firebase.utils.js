import {initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getFirestore, collection, addDoc } from 'firebase/firestore';

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

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  

  // if(!snapShopt.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      const docRef = await addDoc(collection(fireStore, "users"), {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      console.log("Document written with ID: ", docRef.id);
      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
    }



  // }

}



const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =  () => signInWithPopup(authentication,provider);
