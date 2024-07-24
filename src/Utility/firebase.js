import { initializeApp } from "firebase/app";

// auth
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9kVE0M5DVcsrId0CRstQZBX3qMn8wwE",
  authDomain: "clone-a65aa.firebaseapp.com",
  projectId: "clone-a65aa",
  storageBucket: "clone-a65aa.appspot.com",
  messagingSenderId: "83291684011",
  appId: "1:83291684011:web:98a21b6563e86572974bee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


