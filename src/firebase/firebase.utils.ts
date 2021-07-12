import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "crwn-db-52542.firebaseapp.com",
    projectId: "crwn-db-52542",
    storageBucket: "crwn-db-52542.appspot.com",
    messagingSenderId: "338449366394",
    appId: "1:338449366394:web:56b8e205586f8a94802ac3",
    measurementId: "G-Z3N49ZTMQM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;