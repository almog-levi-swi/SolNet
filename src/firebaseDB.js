const initializeApp = require('firebase/app');
const { app } = require('./firebase-config.js');
const { collection, getDocs } = require('firebase/firestore/lite');
const { getDatabase, ref, child, get, push, set, remove } = require('firebase/database');


async function getEmployees(fieldName = null, fieldValue = null) {
    const db = getDatabase();
    const dbRef = ref(db);
    const employeesRef = child(dbRef, 'employees')
    return await get(employeesRef).then((snapshot) => {
      if (snapshot.exists()) {
        return filterOrderBy(snapshot.val(), fieldName, fieldValue);
      } else {
        console.log("No data available");
        return null
      }
    }).catch((error) => {
      console.error(error);
      return null
    });
}

function filterOrderBy(data, fieldName, fieldValue) {
  const dataArray = []
  Object.keys(data).forEach(key => {
    dataArray.push({ key: key, record: data[key] })
  })
  if (!fieldName) {
    return dataArray
  }
  sortedArray = dataArray.sort((a,b) => {
    let retval = 0
    if (a.record[fieldName] < b.record[fieldName]) {
      retval = -1
    } else if (a.record[fieldName] > b.record[fieldName]) {
      retval = 1
    }
    return retval
  })
  if (!fieldValue) {
    return sortedArray
  }
  return sortedArray.filter(entry => entry.record[fieldName] === fieldValue)
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
