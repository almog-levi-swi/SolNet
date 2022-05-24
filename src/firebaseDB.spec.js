
const { getEmployees, insertEmployee, updateEmployee, getEmployee, deleteEmployee } = require('./firebaseDB');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore/lite');

test('should connect to firebase and get employyes', async () => {
    console.log('DB testing.....')
    /* >>>
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
    */
    const emps = await getEmployees();
    console.log('Now we get:', emps)
})

test('filtering and orderingby', async () => {
  console.log('>>>starting filtering')
  const key1 = await insertEmployee({ firstField: 'zz', secondField: 'aa' })
  const key2 = await insertEmployee({ firstField: 'aa', secondField: 'gg' })
  const key3 = await insertEmployee({ firstField: 'gg', secondField: 'zz' })
  const key4 = await insertEmployee({ firstField: 'bb', secondField: 'bb' })
  const key5 = await insertEmployee({ firstField: 'bb', secondField: 'bb1' })
  const key6 = await insertEmployee({ firstField: 'bb', secondField: 'bb2' })
  const empsByFirst = await getEmployees('firstField');
  console.log('>>> empsByFirst = ', empsByFirst)
  const empsBySecond = await getEmployees('secondField');
  console.log('>>> empsBySecond = ', empsBySecond)

  const filterByFirst = await getEmployees('firstField', 'bb');
  console.log('>>> filterByFirst = ', filterByFirst)
  const filterBySecond = await getEmployees('secondField', 'bb');
  console.log('>>> filterBySecond = ', filterBySecond)
  await deleteEmployee(key1)
  await deleteEmployee(key2)
  await deleteEmployee(key3)
  await deleteEmployee(key4)
  await deleteEmployee(key5)
  await deleteEmployee(key6)
 }) 
  
test('pushmepullyou', async () => {
  console.log('>>> started pushmepullyou')
  const key = await insertEmployee({ smart: 'maxwell', agent: 86, dog: 'fang' })
  const gotBack = await getEmployee(key)
  console.log('>>> gotBack = ', gotBack)
  await updateEmployee(key, { agent: 99, tall: true, smart: true })
  const updated = await getEmployee(key)
  console.log('>>> updated = ', updated)
  await deleteEmployee(key)
  const deleted = await getEmployee(key)
  console.log('>>> deleted = ', deleted)
})
