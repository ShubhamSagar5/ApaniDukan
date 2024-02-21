import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSp14VrTXyCDK6kpfi7JwMDQrmwHRyhQg",
  authDomain: "apanidukan-be975.firebaseapp.com",
  projectId: "apanidukan-be975",
  storageBucket: "apanidukan-be975.appspot.com",
  messagingSenderId: "501829643142",
  appId: "1:501829643142:web:5a235f9306ccda6ae1da07"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;