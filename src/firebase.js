import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNXF0gPHl70Ob4Hx4GkJu7yxtlsL3r7Z0",
    authDomain: "tinder-clone-9cb7a.firebaseapp.com",
    projectId: "tinder-clone-9cb7a",
    storageBucket: "tinder-clone-9cb7a.appspot.com",
    messagingSenderId: "76933142184",
    appId: "1:76933142184:web:f2d0645152ebb65840d49d",
    measurementId: "G-KXRCLE1WEV"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
