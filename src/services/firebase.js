import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const firestoreDB = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestoreDB.settings(settings);

export const usersCollection = firestoreDB.collection("users");

export const createUser = (firstName, lastName, email, uid, isAdmin = false) => {
  usersCollection.doc(uid).set({
      firstName,
      lastName,
      email,
      uid,
      isAdmin
    }).then(() => {
      console.log("User added!");
    })
    .catch(function (error) {
      console.error("Error adding user: ", error);
    });
}

export const updateUser = (uid, displayName, email) => {
  usersCollection.doc(uid).update({
      displayName,
      email
    }).then(() => {
      console.log("User updated!");
    })
    .catch(function (error) {
      console.error("Error updating user: ", error);
    });
}
