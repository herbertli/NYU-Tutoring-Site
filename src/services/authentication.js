import firebase from 'firebase';

var provider = new firebase.auth.GoogleAuthProvider();

const Auth = {
  getUser() {
    return firebase.auth().currentUser;
  },
  authenticate(cb) {
    firebase.auth().signInWithPopup(provider)
    .then(() => {
      console.log('Signed in user!');
      cb();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing in user:", errorCode, errorMessage);
      cb();
    });
  },
  signout(cb) {
    firebase.auth().signOut().then(() => {
      console.log('Signed out user!');
      cb();
    }, (error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing out user:", errorCode, errorMessage);
      cb();
    });
  }
};

export default Auth;