import firebase from "firebase"
import "firebase/database"
import "firebase/storage"

const config = {
  apiKey: process.env?.REACT_APP_APIKEY,
  authDomain: process.env?.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env?.REACT_APP_DATABASEURL,
  projectId: process.env?.REACT_APP_PROJECTID,
  storageBucket: process.env?.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env?.REACT_APP_MESSAGINGSENDERID,
  appId: process.env?.REACT_APP_APPID,
  measurementId: process.env?.REACT_APP_MEASUREMENTID,
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const firebaseAppAuth = firebase.auth()
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  phoneProvider: new firebase.auth.PhoneAuthProvider(),
}

export const realtimeDB = firebase.database()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
