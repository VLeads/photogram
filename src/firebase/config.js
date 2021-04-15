 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/storage';
 

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBFDiSuJNCGlQDVoE4Wgd9X9qmLuQ6d10A",
    authDomain: "photogram-d1715.firebaseapp.com",
    projectId: "photogram-d1715",
    storageBucket: "photogram-d1715.appspot.com",
    messagingSenderId: "331587412890",
    appId: "1:331587412890:web:8532660982e069b6015023"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  const projectStorage = firebase.storage();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };