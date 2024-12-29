
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
     getAuth,
     signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     signOut,
     GoogleAuthProvider,
     onAuthStateChanged,
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEPGIzkeMety6bINi_5EXI8wcBF85OSFU",
  authDomain: "react-firstclass.firebaseapp.com",
  projectId: "react-firstclass",
  storageBucket: "react-firstclass.appspot.com",
  messagingSenderId: "975043262033",
  appId: "1:975043262033:web:36b44c37db88f970d3aa70",
  measurementId: "G-HK5DPZKJ4J"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth()
export{
    app,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    getAnalytics,
}