import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQyAJY8uhsW3e4Zy4KwezkP3_qeXqZjxc",
  authDomain: "catch-of-the-day-anuj-pal.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-anuj-pal.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
