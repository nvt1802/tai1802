import { realtimeDB } from "firebaseConfig"

export function createMessage(user, email, photoURL, message) {
  const chatId = new Date().getTime()
  realtimeDB.ref("chats/" + chatId).set({
    user: user,
    email: email,
    photoURL: photoURL,
    message: message,
    createAt: new Date().toLocaleString(),
  })
}

export function deleteMessage(chatId) {
  realtimeDB.ref("chats/" + chatId).remove()
}

export const messageDBRef = realtimeDB.ref("chats")
