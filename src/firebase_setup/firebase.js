// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCar1-z7hZ56LcPK9mjsSq5t9hIqnoSclc",
  authDomain: "zaherblog-5bd1c.firebaseapp.com",
  projectId: "zaherblog-5bd1c",
  storageBucket: "zaherblog-5bd1c.appspot.com",
  messagingSenderId: "79267548339",
  appId: "1:79267548339:web:ed9b922647c22b4a47b4c6",
  measurementId: "G-R9ZDYNN29D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
