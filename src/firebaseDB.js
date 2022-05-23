const initializeApp = require('firebase/app');
const { collection, getDocs } = require('firebase/firestore/lite');
const { getDatabase, ref, child, get } = require('firebase/database');


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     //...
//   };
  
 // const app = initializeApp(firebaseConfig);
  //const db = getFirestore(app);
  
  // Get a list of employees from your database
  async function getEmployees(db) {
    console.log('getEmployees')
    const employeesCol = collection(db, 'employees');
    console.log('employeesCol:', employeesCol);
    const employeesSnapshot = await getDocs(employeesCol);
    console.log('employeesSnapshot:', employeesSnapshot);
    const employeesList = employeesSnapshot.docs.map(doc => doc.data());
    console.log('about to return', employeesList)
    return employeesList;
  }
 
function getEmployeesAri() {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, 'employees')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('snapshot VAL:', snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

module.exports = { getEmployees, getEmployeesAri };