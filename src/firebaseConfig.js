import firebase from "firebase"
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyB6TM3CTsGjow8Y_hCMjzrVAuSv29F9vNw",
  authDomain: "management-music.firebaseapp.com",
  databaseURL: "https://management-music-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "management-music",
  storageBucket: "management-music.appspot.com",
  messagingSenderId: "907626662282",
  appId: "1:907626662282:web:f8913d19bcc25388daa073",
  measurementId: "G-K354VMB0VL"
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const firebaseAppAuth = firebase.auth()
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  phoneProvider: new firebase.auth.PhoneAuthProvider()
}

export const realtimeDB = firebase.database()
