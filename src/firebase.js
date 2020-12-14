import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD6shyEKvVExe1FaaXWZwef3H5vVtslI8",
  authDomain: "wd-twitter-clone.firebaseapp.com",
  projectId: "wd-twitter-clone",
  storageBucket: "wd-twitter-clone.appspot.com",
  messagingSenderId: "775595585383",
  appId: "1:775595585383:web:fb63bf2ce4ad3f920249c2",
  measurementId: "G-RGDQN6JPEZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
