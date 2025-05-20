// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1_kbFrJ6hs9NiGiPGyMFlSdlGIlbflnk",
  authDomain: "recipe-book-app-8135e.firebaseapp.com",
  projectId: "recipe-book-app-8135e",
  storageBucket: "recipe-book-app-8135e.firebasestorage.app",
  messagingSenderId: "171607911991",
  appId: "1:171607911991:web:17e056d376c924604659b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;