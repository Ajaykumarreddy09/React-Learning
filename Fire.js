// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { func } from "prop-types";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpze6entU8cV_Grid1UQT6qdykc_gnPM",
  authDomain: "reactproject-2e6a2.firebaseapp.com",
  projectId: "reactproject-2e6a2",
  storageBucket: "reactproject-2e6a2.firebasestorage.app",
  messagingSenderId: "452799543842",
  appId: "1:452799543842:web:23e2e72fcbf3b6c897287b",
  measurementId: "G-XX8FR2FL32"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const aut=getAuth()
export function signup(email,password){
  return createUserWithEmailAndPassword(aut,email,password)
}

export function signIn(email,password){
  return signInWithEmailAndPassword(aut,email,password)
}
export function logOut(){
  return signOut(aut,email,password)
}



















































