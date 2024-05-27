import {evFirebaseConfig} from './EvConfig';
import {initializeApp} from 'firebase/app';

// Optionally import the services that you want to use
// import { getAuth  } from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from 'firebase/firestore';
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: evFirebaseConfig.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
