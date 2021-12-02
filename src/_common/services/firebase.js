// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWRTDjPC8J1u3k4A4dGHOBBqmdn_MC6nA",
  authDomain: "todolist-690df.firebaseapp.com",
  projectId: "todolist-690df",
  storageBucket: "todolist-690df.appspot.com",
  messagingSenderId: "230841161217",
  appId: "1:230841161217:web:199cbd627f6b8dc865d200",
  measurementId: "G-W75ZHGHX9N",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { app, db };
