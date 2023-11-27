// Import the necessary functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the environment variables
const { VITE_API_KEY } = import.meta.env;

// Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: "beauty-salon-ce18d.firebaseapp.com",
  projectId: "beauty-salon-ce18d",
  storageBucket: "beauty-salon-ce18d.appspot.com",
  messagingSenderId: "965927429867",
  appId: "1:965927429867:web:e4d29a8db73885cbc900ae",
  measurementId: "G-CTMK7H4GE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default firebaseConfig;
