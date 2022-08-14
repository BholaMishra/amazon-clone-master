// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNHNmpUAMPi2Qhk1gsXhUMGbT7eYs83aI",
  authDomain: "clone-60f52.firebaseapp.com",
  projectId: "clone-60f52",
  storageBucket: "clone-60f52.appspot.com",
  messagingSenderId: "194440255913",
  appId: "1:194440255913:web:4cf386777790665b818cb8",
  measurementId: "G-9H5JPC41XF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db , auth};