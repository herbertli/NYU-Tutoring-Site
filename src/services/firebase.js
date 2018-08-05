import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCHGdDK99IxKIhdAwazCXAIOS3WHnG0gJU",
  authDomain: "summer-test-project.firebaseapp.com",
  databaseURL: "https://summer-test-project.firebaseio.com",
  projectId: "summer-test-project",
  storageBucket: "summer-test-project.appspot.com",
  messagingSenderId: "662511872543"
};
firebase.initializeApp(config);

const firestoreDB = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestoreDB.settings(settings);

export const usersCollection = firestoreDB.collection("users");
export const gamesCollection = firestoreDB.collection("games");
