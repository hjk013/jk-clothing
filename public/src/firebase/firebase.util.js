import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBVj16WHCakJf_gxrAx_BGRENNkIx4xm1U',
  authDomain: 'jkclothing-db.firebaseapp.com',
  databaseURL: 'https://jkclothing-db.firebaseio.com',
  projectId: 'jkclothing-db',
  storageBucket: '',
  messagingSenderId: '444914111346',
  appId: '1:444914111346:web:17e440ce09760326',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
// We want to always trigger the Google pop up whenever we use this Google Auth provider for authentification and sign in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
