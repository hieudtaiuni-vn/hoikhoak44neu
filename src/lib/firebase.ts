import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8xSqx3ZwO9QJK7jVWHyt3_khiOJGubW8",
  authDomain: "impressive-nucleus-h6shk.firebaseapp.com",
  projectId: "impressive-nucleus-h6shk",
  storageBucket: "impressive-nucleus-h6shk.firebasestorage.app",
  messagingSenderId: "634724098928",
  appId: "1:634724098928:web:5ca8e3eae06e1b1b2025b5"
};

// Initialize Firebase safely
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

