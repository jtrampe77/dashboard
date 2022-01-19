 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_9T7PDZHgAfnUcRGfROShlEIe4mozkRg",
  authDomain: "sneakerheadz-336fe.firebaseapp.com",
  databaseURL: "https://sneakerheadz-336fe-default-rtdb.firebaseio.com",
  projectId: "sneakerheadz-336fe",
  storageBucket: "sneakerheadz-336fe.appspot.com",
  messagingSenderId: "935310122501",
  appId: "1:935310122501:web:faf35f35da0ccec81d066c",
  measurementId: "G-FKEWY0KXYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}