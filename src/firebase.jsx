// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAjpeFEOKTtAIJZ1fpRvfguwqNoXgdXPE",
  authDomain: "oryza-7ae36.firebaseapp.com",
  projectId: "oryza-7ae36",
  storageBucket: "oryza-7ae36.appspot.com",
  messagingSenderId: "579404902976",
  appId: "1:579404902976:web:3f93e1f2ad8c8a8c7365a5",
  measurementId: "G-7E0FSJBNL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);