// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvQKDsfawUQOCDzN93N2hIq7s2e1LppPE",
  authDomain: "mern-book-nest.firebaseapp.com",
  projectId: "mern-book-nest",
  storageBucket: "mern-book-nest.appspot.com",
  messagingSenderId: "343031401435",
  appId: "1:343031401435:web:8260a14026d4966879b5fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;