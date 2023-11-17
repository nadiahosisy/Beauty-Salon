// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";
// import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyDbEY-3r_yhaRizofR0ZJHa3IOBNVoqExE",
  authDomain: "beauty-salon-ce18d.firebaseapp.com",
  projectId: "beauty-salon-ce18d",
  storageBucket: "beauty-salon-ce18d.appspot.com",
  messagingSenderId: "965927429867",
  appId: "1:965927429867:web:e4d29a8db73885cbc900ae",
  measurementId: "G-CTMK7H4GE3",
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// // export const auth = firebase.auth();
// export const auth = getAuth(app);

// export const db = getFirestore(app); // Initialize Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default firebaseConfig;
