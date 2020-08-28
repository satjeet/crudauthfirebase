import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZqChcflo0tlcxN1yvQaEgUfAm3CYI6Ww",
  authDomain: "crudfirebasevue.firebaseapp.com",
  databaseURL: "https://crudfirebasevue.firebaseio.com",
  projectId: "crudfirebasevue",
  storageBucket: "crudfirebasevue.appspot.com",
  messagingSenderId: "522859270944",
  appId: "1:522859270944:web:e6efec15a7794bb992fd45",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
