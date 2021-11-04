import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsSVLPBDv6qXPcOsyKVLjVWOaNtnUp0ss",
  authDomain: "facebook-clone-a9bc5.firebaseapp.com",
  projectId: "facebook-clone-a9bc5",
  storageBucket: "facebook-clone-a9bc5.appspot.com",
  messagingSenderId: "1060751392531",
  appId: "1:1060751392531:web:0441893d755526ecc7e4e6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
