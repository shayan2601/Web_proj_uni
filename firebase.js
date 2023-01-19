import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCwVnD0pjA_vkmHgwxdw_hxxheLkMTols",
  authDomain: "website-again-13dc9.firebaseapp.com",
  projectId: "website-again-13dc9",
  storageBucket: "website-again-13dc9.appspot.com",
  messagingSenderId: "1082139099894",
  appId: "1:1082139099894:web:7b44e6661a3a9d8c2ce2d7",
  measurementId: "G-XVH6G8RRX8",
};
const firebaseapp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseapp.firestore();

export default db;
