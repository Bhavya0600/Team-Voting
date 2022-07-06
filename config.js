import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyDRtStBQSz6ujAc-I4CX2zrpTTdVm0KXRY",
  authDomain: "teamvotingapp-d120c.firebaseapp.com",
  databaseURL: "https://teamvotingapp-d120c-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-d120c",
  storageBucket: "teamvotingapp-d120c.appspot.com",
  messagingSenderId: "568359639099",
  appId: "1:568359639099:web:cd4815d7b0c53aa701a41e",
  measurementId: "G-1HZDXRY607"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
