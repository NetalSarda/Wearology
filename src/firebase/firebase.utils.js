// Import only the functions you need from Firebase packages
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDiTYCK6xwmgFsS-io1fwL7UScoAOHS318",
  authDomain: "wearology-fd4e7.firebaseapp.com",
  projectId: "wearology-fd4e7",
  storageBucket: "wearology-fd4e7.appspot.com",
  messagingSenderId: "151896277698",
  appId: "1:151896277698:web:5a6d615f97c4fbd0f1f15b",
  measurementId: "G-E3XFWS08EZ"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get authentication and Firestore services
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Set up Google authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Google sign-in function
export const signInWithGoogle = () => signInWithPopup(auth, provider);
