import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

//Teja
// const firebaseConfig = {
//   apiKey: "AIzaSyB_Qestz-lmJ9vruvivB1ZJKJgLziaIjWE",
//   authDomain: "beneaththesunrays-862cc.firebaseapp.com",
//   projectId: "beneaththesunrays-862cc",
//   storageBucket: "beneaththesunrays-862cc.appspot.com",
//   messagingSenderId: "518339816261",
//   appId: "1:518339816261:web:29e0375868dd99f0592c2c",
//   measurementId: "G-E8SBPFMHDH",
// };

//sakshi 
// const firebaseConfig = {
//   apiKey: "AIzaSyDKJsVytcOo3VeGHx-pCk-W6T16lCazRN8",
//   authDomain: "beneaththesunrays-69990.firebaseapp.com",
//   projectId: "beneaththesunrays-69990",
//   storageBucket: "beneaththesunrays-69990.appspot.com",
//   messagingSenderId: "137680752779",
//   appId: "1:137680752779:web:beb466879db2f30804448e"
// };

//sakshi 1
const firebaseConfig = {
  apiKey: "AIzaSyDwRdagen66vH_w_P8wnf6xABftKA7CoA0",
  authDomain: "beaneaththesunrays1.firebaseapp.com",
  projectId: "beaneaththesunrays1",
  storageBucket: "beaneaththesunrays1.appspot.com",
  messagingSenderId: "475135300954",
  appId: "1:475135300954:web:74dba34d058eed6bf90f63"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }

