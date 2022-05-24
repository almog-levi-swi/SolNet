import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL:
    "https://solnat-698bf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "solnat-698bf",
  storageBucket: "solnat-698bf.appspot.com",
  messagingSenderId: "651684636578",
  appId: "1:651684636578:web:5a50c01478a12c361af4fb",
  measurementId: "G-G0H5MP61J9",
};

const app = initializeApp(firebaseConfig);
