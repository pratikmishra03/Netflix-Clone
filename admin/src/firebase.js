import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyC-mxCX1EoVTt02lrZVCIEejSbNcGjSQjw",
    authDomain: "netflix-883b8.firebaseapp.com",
    projectId: "netflix-883b8",
    storageBucket: "netflix-883b8.appspot.com",
    messagingSenderId: "205529648858",
    appId: "1:205529648858:web:5494ca004a17a1d0c19fe3",
    measurementId: "G-2HVKMZ8MDJ"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  export default storage;