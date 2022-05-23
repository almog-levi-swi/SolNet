
const { getEmployees, getEmployeesAri } = require('./firebaseDB');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore/lite');

test('should connect to firebase and get employyes', () => {
    console.log('DB testing.....')
    const firebaseConfig = {
        apiKey: "AIzaSyCI5uyjXjjGnvMIMtpg3Mt3VnE39g8Ue5M",
        authDomain: "solnat-698bf.firebaseapp.com",
        databaseURL:
          "https://solnat-698bf-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "solnat-698bf",
        storageBucket: "solnat-698bf.appspot.com",
        messagingSenderId: "651684636578",
        appId: "1:651684636578:web:5a50c01478a12c361af4fb",
        measurementId: "G-G0H5MP61J9",
      };
        
    const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);

    // getEmployees(db)
    //     .then(list => console.log('emp list:', list)
    //     .else(err => console.log('ERROR:', err)));

    const emps = getEmployeesAri();
    console.log('emp list:', emps);

    // getEmployeesAri()
    //     .then(list => {
    //         console.log('emp list:', list)
    //     })
    //     .else(err => console.log('ERROR:', err));
    
})
