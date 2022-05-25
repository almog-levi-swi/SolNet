// >>> const { initializeApp } = require('firebase/firebase/app')
// >>> const { getAuth } = require('firebase/auth')

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCI5uyjXjjGnvMIMtpg3Mt3VnE39g8Ue5M',
  authDomain: 'solnat-698bf.firebaseapp.com',
  databaseURL:
    "https://solnat-698bf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "solnat-698bf",
  storageBucket: "solnat-698bf.appspot.com",
  messagingSenderId: "651684636578",
  appId: "1:651684636578:web:5a50c01478a12c361af4fb",
  measurementId: "G-G0H5MP61J9",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// >>> module.exports = { app, auth }
