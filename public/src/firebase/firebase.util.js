/* eslint-disable no-use-before-define */
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

// making an API request to Firebase so that we can save user to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user does not exist, we want to do nothing
  if (!userAuth) return;

  // create userRef with userAuth uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // then create a snapShot using userRef
  const snapShot = await userRef.get();

  // if it user does not exist, create new doc with the displayName, email, also decided to put in createdAt to see when it was created
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(98);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user"', error.message);
    }
  }
  // we want to use the userRef elsewhere, so let's make this return
  return userRef;
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
