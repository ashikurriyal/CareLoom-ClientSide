// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyV0X_OsMugXe_ix5IZfINg2viSb4SAgM",
  authDomain: "care-loom.firebaseapp.com",
  projectId: "care-loom",
  storageBucket: "care-loom.appspot.com",
  messagingSenderId: "915660855749",
  appId: "1:915660855749:web:a2908b6cbdbf813146d3ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;