import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyDrl2x7h2_xBya2AWwXnsB5F5HIHWIXrz0",
    authDomain: "ryu-technology.firebaseapp.com",
    projectId: "ryu-technology",
    storageBucket: "ryu-technology.appspot.com",
    messagingSenderId: "1018124328143",
    appId: "1:1018124328143:web:1b8c19d6d4afe9ea6c2bba"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)