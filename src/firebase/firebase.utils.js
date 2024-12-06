import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from 'webpack';

const Config = 
    {
        apiKey: "AIzaSyDiTYCK6xwmgFsS-io1fwL7UScoAOHS318",
        authDomain: "wearology-fd4e7.firebaseapp.com",
        projectId: "wearology-fd4e7",
        storageBucket: "wearology-fd4e7.firebasestorage.app",
        messagingSenderId: "151896277698",
        appId: "1:151896277698:web:5a6d615f97c4fbd0f1f15b",
        measurementId: "G-E3XFWS08EZ"
      
};
firebase.initializeApp(config);

