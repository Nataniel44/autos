// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJPmVBOhbY6NbRTSAvuvYQFDerFk_aVSw",
  authDomain: "automsinfo.firebaseapp.com",
  projectId: "automsinfo",
  storageBucket: "automsinfo.appspot.com",
  messagingSenderId: "597652897491",
  appId: "1:597652897491:web:dcf92f0fcf9fb7bab15e26",
  measurementId: "G-FLBJMSEE2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
