import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMjKkUTapkb1W2ivgPqXw2HUHZVUCrVc4",
  authDomain: "slack-clone-15753.firebaseapp.com",
  projectId: "slack-clone-15753",
  storageBucket: "slack-clone-15753.appspot.com",
  messagingSenderId: "474450100729",
  appId: "1:474450100729:web:d3ecda74fc166af902fd28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

