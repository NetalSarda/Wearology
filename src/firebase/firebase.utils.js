// Import only the functions you need from Firebase packages
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


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
