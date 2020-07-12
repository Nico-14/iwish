import * as firebase from "firebase/app";
import 'firebase/firestore';

function getFirebaseApp() {
  console.log("Get firebase app")
  try {
    const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyCkM_7s6Jm0SlaHFaa_ILWajLoSp_dmJk0",
      authDomain: "wishes-5bdaf.firebaseapp.com",
      databaseURL: "https://wishes-5bdaf.firebaseio.com",
      projectId: "wishes-5bdaf",
      storageBucket: "wishes-5bdaf.appspot.com",
      messagingSenderId: "894202491072",
      appId: "1:894202491072:web:846cd14f42a0d390babd25"
    });
    console.log("New firebase app")

    return firebaseApp;
  } catch{
    console.log("Exist firebase app")

    return firebase.app;
  }
}

export default getFirebaseApp;