// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvmOiGJlLD0Gir5iGpStT7rLCOj37fifM",
  authDomain: "react-soc-med.firebaseapp.com",
  projectId: "react-soc-med",
  storageBucket: "react-soc-med.appspot.com",
  messagingSenderId: "122673759108",
  appId: "1:122673759108:web:62634f206db4bd71ddd3d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();