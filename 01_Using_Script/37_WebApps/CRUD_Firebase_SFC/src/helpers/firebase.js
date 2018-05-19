import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyBReTREjTr5jt7HrkFmDG93-ejhIrM8jxI",
  authDomain: "crud-vue-firebase.firebaseapp.com",
  databaseURL: "https://crud-vue-firebase.firebaseio.com",
  projectId: "crud-vue-firebase",
  storageBucket: "crud-vue-firebase.appspot.com",
  messagingSenderId: "414655441278"
})


export const db = app.database()
export const dbRef = db.ref('vueStudents')
