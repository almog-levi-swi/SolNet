// import { app } from "./firebase-config.js";
// import { collection, getDocs } from "firebase/firestore/lite";
import {
  getDatabase,
  ref,
  child,
  get,
  push,
  set,
  remove,
} from "firebase/database";

export async function getEmployees(fieldName = null, fieldValue = null) {
  const db = getDatabase();
  const dbRef = ref(db);
  const employeesRef = child(dbRef, "employees");
  return await get(employeesRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return filterOrderBy(snapshot.val(), fieldName, fieldValue);
      } else {
        console.log("No data available");
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function filterOrderBy(data, fieldName, fieldValue) {
  const dataArray = [];
  Object.keys(data).forEach((key) => {
    dataArray.push({ key: key, record: data[key] });
  });
  if (!fieldName) {
    return dataArray;
  }
  let sortedArray = dataArray.sort((a, b) => {
    let retval = 0;
    if (a.record[fieldName] < b.record[fieldName]) {
      retval = -1;
    } else if (a.record[fieldName] > b.record[fieldName]) {
      retval = 1;
    }
    return retval;
  });
  if (!fieldValue) {
    return sortedArray;
  }
  return sortedArray.filter((entry) => entry.record[fieldName] === fieldValue);
}

export async function insertEmployee(employee) {
  const db = getDatabase();
  const dbRef = ref(db);
  const newEmpRef = push(child(dbRef, "employees"));
  await set(newEmpRef, employee);
  return newEmpRef.key;
}

export async function updateEmployee(key, employee) {
  const db = getDatabase();
  const dbRef = ref(db);
  const newEmpRef = ref(db, `employees/${key}`);
  await set(newEmpRef, employee);
}

export async function getEmployee(key) {
  const db = getDatabase();
  const dbRef = ref(db);
  return await get(child(dbRef, `employees/${key}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function deleteEmployee(key) {
  const db = getDatabase();
  const dbRef = ref(db);
  const newEmpRef = ref(db, `employees/${key}`);
  await remove(newEmpRef);
}
