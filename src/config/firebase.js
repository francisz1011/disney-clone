import {  getAuth, GoogleAuthProvider} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCedHxf8-BbQToLU2ssZ3bzr1NDD9Q8hpA",
  authDomain: "disney-clone-1d30c.firebaseapp.com",
  projectId: "disney-clone-1d30c",
  storageBucket: "disney-clone-1d30c.appspot.com",
  messagingSenderId: "59380985512",
  appId: "1:59380985512:web:37489f9f79baca61071c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();