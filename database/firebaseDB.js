import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwg8K34b_qh9opd8gxotgxrN3KsIvj66g",
    authDomain: "rnative-cf337.firebaseapp.com",
    databaseURL: "https://rnative-cf337-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rnative-cf337",
    storageBucket: "rnative-cf337.appspot.com",
    messagingSenderId: "367166790506",
    appId: "1:367166790506:web:f439a0b4872ca44675e313"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
