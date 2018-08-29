import firebase from "firebase/app";
import 'firebase/auth';
import { from } from 'rxjs';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "exadel-training-react-course.firebaseapp.com",
    databaseURL: "https://exadel-training-react-course.firebaseio.com",
    projectId: "exadel-training-react-course",
    storageBucket: "exadel-training-react-course.appspot.com",
    messagingSenderId: "1095008325302"
};

const firebaseApi = {
    initialize: () => firebase.initializeApp(config),

    signUp: (email, password) => from(firebase.auth().createUserWithEmailAndPassword(email, password)),

    logIn: (email, password) => from(firebase.auth().signInWithEmailAndPassword(email, password)),

    logOut: () => from(firebase.auth().signOut()),
};

export default firebaseApi;

