// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbBqmKnhjuzVZXJwzdJXlt0E9rlVTvJFo",
  authDomain: "portfolio-2023-9dacf.firebaseapp.com",
  projectId: "portfolio-2023-9dacf",
  storageBucket: "portfolio-2023-9dacf.appspot.com",
  messagingSenderId: "635962949530",
  appId: "1:635962949530:web:9a0e68bb612df2418e4423",
  measurementId: "G-SB87R16DTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db}