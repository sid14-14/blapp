// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "the-blapp.firebaseapp.com",
  projectId: "the-blapp",
  storageBucket: "the-blapp.appspot.com",
  messagingSenderId: "643154172911",
  appId: "1:643154172911:web:147be315624a25d3da741a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);