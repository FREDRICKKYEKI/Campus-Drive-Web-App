import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"



const app = firebase.initializeApp({
    apiKey: "AIzaSyA4B8Mgr0oET7EhbDvSxO0aTCmSNRdL_s0",
    authDomain: "campus-drive-b2ea0.firebaseapp.com",
    projectId: "campus-drive-b2ea0",
    storageBucket: "campus-drive-b2ea0.appspot.com",
    messagingSenderId: "705096811689",
    appId: "1:705096811689:web:71a05aa0523944ac2095b8",
    measurementId: "G-VE60JF0YL5"
  })
  
  const firestore = app.firestore()
  export const storage = app.storage()

  export const database = {
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    posts: firestore.collection("camp_meet_posts"),
    classmates: firestore.collection("user_profiles"),
    mails:firestore.collection("mails"),
    formatDoc: doc => {
      return {id: doc.id, ...doc.data()}
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
  }

  export const auth = app.auth()
  export default app 