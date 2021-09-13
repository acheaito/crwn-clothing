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
};

export const createUserProfileDocument = async (userAuth: firebase.User | null, additionalData?: Record<string,any>): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | undefined> => {
    if (!userAuth) {
        console.log('User auth is null');
        return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('Error creating user', error);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> => auth.signInWithPopup(provider);

export default firebase;