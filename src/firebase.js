import firebase from 'firebase';

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyCAvJeA1fGWaU7I-Ui3Io6n1AJsA_el1FI",
    authDomain: "sample-project-7c313.firebaseapp.com",
    databaseURL: "https://sample-project-7c313.firebaseio.com",
    projectId: "sample-project-7c313",
    storageBucket: "sample-project-7c313.appspot.com",
    messagingSenderId: "185912069847"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
