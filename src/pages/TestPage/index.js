import React, { useEffect } from "react"
import "firebase/auth"
import firebase from "firebase/app"
import { providers } from "firebaseConfig"

export default function TestPage() {
  useEffect(() => {
    providers.facebookProvider.setCustomParameters({
      display: "popup",
    })
  })

  const handleTest = (e) => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithPopup(providers.facebookProvider)
      .then((result) => {
        console.log(result)
        // var credential = result.credential

        // The signed-in user info.
        // var user = result.user

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken

        // ...
      })
      .catch((error) => {
        // var errorCode = error.code
        // var errorMessage = error.message
        // var email = error.email
        // var credential = error.credential
      })
  }

  return (
    <div style={{ height: "100vh" }}>
      <form>
        <input type="text" name="" id="" />
        <button onClick={handleTest}>Test</button>
      </form>
    </div>
  )
}
