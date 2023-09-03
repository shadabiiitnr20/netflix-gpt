// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZWZUske85ANkUqx833X7ZUhgpcIiWdo",
  authDomain: "shadab-netflixgpt.firebaseapp.com",
  projectId: "shadab-netflixgpt",
  storageBucket: "shadab-netflixgpt.appspot.com",
  messagingSenderId: "990383205741",
  appId: "1:990383205741:web:09579bbafda4ff810cfe64",
  measurementId: "G-ZZ9LC9NZ0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();