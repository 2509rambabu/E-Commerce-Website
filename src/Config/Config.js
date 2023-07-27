import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAjB2z3_Dd6xoevmViTMCQa4TknvaGsPJ0",
    authDomain: "e-commerce-app-bd43e.firebaseapp.com",
    projectId: "e-commerce-app-bd43e",
    storageBucket: "e-commerce-app-bd43e.appspot.com",
    messagingSenderId: "436729761041",
    appId: "1:436729761041:web:f5ad8cde903a5bd35290b0"
  };
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const fs=firebase.firestore();
  const storage=firebase.storage();

  export {auth,fs,storage};
