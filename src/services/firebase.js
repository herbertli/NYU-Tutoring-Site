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

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
}

export const isAuthorized = () => {
  const user = getCurrentUser();
  if (user !== null)
    return getUser(user.uid) !== null;
  return false;
}

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
  usersCollection.doc(uid).get().then((doc) => {
    if (doc.exists) {
      return doc;
    } else {
      console.log("No such document!");
      return null;
    }
  });
}

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

export const isAdmin = (uid) => {
  const user = getUser(uid);
  return user.data().isAdmin;
}