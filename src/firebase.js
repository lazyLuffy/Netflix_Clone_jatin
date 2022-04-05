import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwEFjf7wVX3HV0lOGit1vGg_cAQl-iNbc",
    authDomain: "netflix-jatin-clone.firebaseapp.com",
    projectId: "netflix-jatin-clone",
    storageBucket: "netflix-jatin-clone.appspot.com",
    messagingSenderId: "363133686941",
    appId: "1:363133686941:web:e7d1469642de280686b074"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

export {db,auth}
