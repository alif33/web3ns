import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2mIEzFHFLQAWHE3ABdmV8zjXgIEUgLYM",
  authDomain: "web3ns-e4199.firebaseapp.com",
  projectId: "web3ns-e4199",
  storageBucket: "web3ns-e4199.appspot.com",
  messagingSenderId: "18135562007",
  appId: "1:18135562007:web:401d6723777f75d2dca952",
  measurementId: "G-WMMS5K4N65"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export default app;

