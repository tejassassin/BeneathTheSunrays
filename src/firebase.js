import firebase from "firebase"
// import "firebase/auth"
// import "firebase/firestore"
// import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB_Qestz-lmJ9vruvivB1ZJKJgLziaIjWE",
  authDomain: "beneaththesunrays-862cc.firebaseapp.com",
  projectId: "beneaththesunrays-862cc",
  storageBucket: "beneaththesunrays-862cc.appspot.com",
  messagingSenderId: "518339816261",
  appId: "1:518339816261:web:29e0375868dd99f0592c2c",
  measurementId: "G-E8SBPFMHDH",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }