const initializeApp = require('firebase/app');
const { collection, getDocs } = require('firebase/firestore/lite');
const { getDatabase, ref, child, get, push, set, remove } = require('firebase/database');


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     //...
//   };
  
 // const app = initializeApp(firebaseConfig);
  //const db = getFirestore(app);
  
async function getEmployees() {
    const dbRef = ref(getDatabase());
    return await get(child(dbRef, 'employees')).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null
      }
    }).catch((error) => {
      console.error(error);
      return null
    });
}

async function insertEmployee(employee) {
    const db = getDatabase();
    const dbRef = ref(db);
    const newEmpRef = push(child(dbRef, 'employees'))
    await set(newEmpRef, employee)
    return newEmpRef.key
}

async function updateEmployee(key, employee) {
    const db = getDatabase();
    const dbRef = ref(db);
    const newEmpRef = ref(db, `employees/${key}`)
    await set(newEmpRef, employee)
}

async function getEmployee(key) {
    const db = getDatabase();
    const dbRef = ref(db);
    return await get(child(dbRef, `employees/${key}`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null
      }
    }).catch((error) => {
      console.error(error);
      return null
    });
}

async function deleteEmployee(key) {
    const db = getDatabase();
    const dbRef = ref(db);
    const newEmpRef = ref(db, `employees/${key}`)
    await remove(newEmpRef)
}

module.exports = { getEmployees, insertEmployee, updateEmployee, getEmployee, deleteEmployee };
