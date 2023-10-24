// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbEY-3r_yhaRizofR0ZJHa3IOBNVoqExE",
  authDomain: "beauty-salon-ce18d.firebaseapp.com",
  projectId: "beauty-salon-ce18d",
  storageBucket: "beauty-salon-ce18d.appspot.com",
  messagingSenderId: "965927429867",
  appId: "1:965927429867:web:e4d29a8db73885cbc900ae",
  measurementId: "G-CTMK7H4GE3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
