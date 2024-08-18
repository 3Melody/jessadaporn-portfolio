// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDky2uIX8FIvhOY4urWxpcxMkQ4l-KebBc",
  authDomain: "webportfolio-d4d7c.firebaseapp.com",
  projectId: "webportfolio-d4d7c",
  storageBucket: "webportfolio-d4d7c.appspot.com",
  messagingSenderId: "88903186766",
  appId: "1:88903186766:web:0244c62d09f5578675861f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db