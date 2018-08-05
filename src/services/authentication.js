import firebase from './../services/firebase';

var provider = new firebase.auth.GoogleAuthProvider();

const Auth = {
  getUser() {
    return firebase.auth().currentUser;
  },
  authenticate(cb) {
    firebase.auth().signInWithPopup(provider)
    .then((user) => {
      console.log('Signed in user!');
      cb(true, this.getUser());
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing in user:", errorCode, errorMessage);
      cb(false, this.getUser());
    });
  },
  signout(cb) {
    firebase.auth().signOut().then(() => {
      console.log('Signed out user!');
      cb(true, this.getUser());
    }, (error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error signing out user:", errorCode, errorMessage);
      cb(false, this.getUser());
    });
  }
};

export default Auth;