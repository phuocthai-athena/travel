import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBUOnL_7qQaOycHhM7Jksmnky8Hp3gRYjo",
  authDomain: "dulich-84749.firebaseapp.com",
  projectId: "dulich-84749",
  storageBucket: "dulich-84749.appspot.com",
  messagingSenderId: "794229872593",
  appId: "1:794229872593:web:af9b2579c4edcd8f1932f0",
  measurementId: "G-EQJEYDTN2G"
};

firebase.initializeApp(config)

const storage = firebase.storage();
export { storage, firebase as default };