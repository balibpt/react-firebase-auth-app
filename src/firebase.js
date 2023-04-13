// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCaArh-42UFPxj0jrP_5-G_V8wKzEWgvs",
  authDomain: "react-firebase-auth-app-903b6.firebaseapp.com",
  projectId: "react-firebase-auth-app-903b6",
  storageBucket: "react-firebase-auth-app-903b6.appspot.com",
  messagingSenderId: "673854836299",
  appId: "1:673854836299:web:27e758e06fed0dce6007ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
