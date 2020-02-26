import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvYbIH4xAvEIk4-MVEvKzFG9YFmEWO-ro",
  authDomain: "entertaining-minds.firebaseapp.com",
  databaseURL: "https://entertaining-minds.firebaseio.com",
  projectId: "entertaining-minds",
  storageBucket: "gs://entertaining-minds.appspot.com",
  messagingSenderId: "1038477864747"
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;