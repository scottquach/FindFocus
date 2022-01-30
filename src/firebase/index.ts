// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASgNtuZ3pewTjx3omFWq6M10kmtAj3gwY",
  authDomain: "board-595c4.firebaseapp.com",
  projectId: "board-595c4",
  storageBucket: "board-595c4.appspot.com",
  messagingSenderId: "533563381131",
  appId: "1:533563381131:web:892e94ddf49199ce404b8e",
  measurementId: "G-Z91M60Z0B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);

