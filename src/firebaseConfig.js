import firebase from "firebase"
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyAjYU3x7GY_fWbkXP9VifDxRL_E5fm5KXI",
  authDomain: "tai1802.firebaseapp.com",
  projectId: "tai1802",
  storageBucket: "tai1802.appspot.com",
  messagingSenderId: "664708445564",
  appId: "1:664708445564:web:3fcd1e054b8eb8e00820f9",
  measurementId: "G-1LPWF3HBGT"
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
