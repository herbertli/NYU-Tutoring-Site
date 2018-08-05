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

// creates a game in firestore
export const createGame = (userId) => {
  var gameRef = gamesCollection.doc();
  addUserToGame(userId, gameRef.id);
}

// add game to user obj and add user to game object
export const addUserToGame = (userId, gameId) => {
  usersCollection.doc(userId).update({
    [`games.${gameId}`]: true
  })
  .then(() => {
      console.log(`Added game: ${gameId} to user: ${userId}`);
  })
  .catch((error) => {
      console.error(`Error adding game: ${gameId} to user: ${userId}:`, error);
  });

  gamesCollection.doc(gameId).update({
    [`users.${userId}`]: true
  })
  .then(() => {
    console.log(`Added user: ${userId} to game: ${gameId}`);
  })
  .catch((error) => {
      console.error(`Error adding user: ${userId} to game: ${gameId}:`, error);
  });

}

// remove game from user obj and remove user from game object
export const removeUserFromGame = (userId, gameId) => {
  usersCollection.doc(userId).update({
    ['games.' + gameId]: firebase.firestore.FieldValue.delete()
  })
  .then(() => {
      console.log(`Removed game: ${gameId} from user: ${userId}`);
  })
  .catch((error) => {
      console.error(`Error removing game: ${gameId} from user: ${userId}:`, error);
  });

  gamesCollection.doc(gameId).update({
    ['users.' + userId]: firebase.firestore.FieldValue.delete()
  })
  .then(() => {
    console.log(`Removed user: ${userId} from game: ${gameId}`);
  })
  .catch((error) => {
      console.error(`Error removing user: ${userId} from game: ${gameId}:`, error);
  });

}


