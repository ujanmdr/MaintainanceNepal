import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe0dsWUo7o-_uAJyXxDl3VYle-b7MpGUA",
  authDomain: "reactauth-662ad.firebaseapp.com",
  projectId: "reactauth-662ad",
  storageBucket: "reactauth-662ad.appspot.com",
  messagingSenderId: "790437355649",
  appId: "1:790437355649:web:cefd730cfb65dd31df2d80",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

export const logout = () => {
  auth.signOut();
};

export { app, auth, db };
