// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ_84azMD-KQm7pTOAS8r-tkD7msbYwJA",
  authDomain: "create-user-7aa02.firebaseapp.com",
  projectId: "create-user-7aa02",
  storageBucket: "create-user-7aa02.appspot.com",
  messagingSenderId: "730927334188",
  appId: "1:730927334188:web:562c8fcf9ee7580df36289",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
