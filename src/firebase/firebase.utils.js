import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCCyo6YvRVosLLlS8OAUAS0RR8ZIGYf6FU",
    authDomain: "brand-clothing.firebaseapp.com",
    databaseURL: "https://brand-clothing.firebaseio.com",
    projectId: "brand-clothing",
    storageBucket: "",
    messagingSenderId: "848104533653",
    appId: "1:848104533653:web:87ab0e509ad3cc01"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();


      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (error){
          console.log("error creating user", error.message);
      }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;