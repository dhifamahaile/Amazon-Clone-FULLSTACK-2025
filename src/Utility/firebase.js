// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDs0eXMO0oguKEZsefA14pb7PHIV8H1Qbk",
  authDomain: "e-clone-2025-c3570.firebaseapp.com",
  projectId: "e-clone-2025-c3570",
  storageBucket: "e-clone-2025-c3570.firebasestorage.app",
  messagingSenderId: "366737034142",
  appId: "1:366737034142:web:274a2a67f079062539a48f",
  measurementId: "G-CZX1SQ8R2Z",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore();
