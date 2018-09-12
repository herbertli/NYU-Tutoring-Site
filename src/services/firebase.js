import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './../firebaseConfig';

firebase.initializeApp(firebaseConfig);
export default firebase;

const firestoreDB = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestoreDB.settings(settings);

export const usersCollection = firestoreDB.collection("users");

export const listenToUsers = () => {
  usersCollection.onSnapshot((snapshot) => {
    var users = [];
    snapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  });
}

export const getUser = (uid) => {
  usersCollection.where("uid" === uid).get().then((doc) => {
    if (doc.exists) {
      return doc;
    } else {
      console.log("No such document!");
      return null;
    }
  });
}

export const createUser = (firstName, lastName, email, isAdmin = false) => {
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

export const isAdmin = (uid) => {
  const user = getUser(uid);
  return user.data().isAdmin;
}