// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD_2MY3s3F2XliuvqzcGsiDzvqUYYArLA",
  authDomain: "study-pod-116bf.firebaseapp.com",
  projectId: "study-pod-116bf",
  storageBucket: "study-pod-116bf.firebasestorage.app",
  messagingSenderId: "906666123967",
  appId: "1:906666123967:web:0709ce4f215f7acb469c0a",
  measurementId: "G-MM14NB1X3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);