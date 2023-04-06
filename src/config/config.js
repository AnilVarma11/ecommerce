import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyA-YxZJwq5BSgoeD_Or3QTdZM69f7wLiKs",
    authDomain: "ecommerce-b9d1a.firebaseapp.com",
    projectId: "ecommerce-b9d1a",
    storageBucket: "ecommerce-b9d1a.appspot.com",
    messagingSenderId: "631841780538",
    appId: "1:631841780538:web:9931dda018f821982e5603",
    measurementId: "G-PKKTT7YD1R"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export{auth, fs, storage};