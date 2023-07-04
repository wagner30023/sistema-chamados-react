import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAvegUwPOhhakyQAgwoA8HZFVQ_PRD5-t8",
    authDomain: "tickets-9e76e.firebaseapp.com",
    projectId: "tickets-9e76e",
    storageBucket: "tickets-9e76e.appspot.com",
    messagingSenderId: "656678292148",
    appId: "1:656678292148:web:7c644d837ee175b3de65e1",
    measurementId: "G-2MJF0L30RY"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage}