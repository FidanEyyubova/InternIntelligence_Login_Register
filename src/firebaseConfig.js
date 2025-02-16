// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4JRrneBc_RyHnYF-fAlJfcQ1ERUKy9RM",
  authDomain: "login-register-page-39e67.firebaseapp.com",
  projectId: "login-register-page-39e67",
  storageBucket: "login-register-page-39e67.firebasestorage.app",
  messagingSenderId: "1090133110999",
  appId: "1:1090133110999:web:592cba6b35e55f312dc092",
  measurementId: "G-VRTBLM7GQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
