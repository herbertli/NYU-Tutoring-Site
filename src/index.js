import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCHGdDK99IxKIhdAwazCXAIOS3WHnG0gJU",
  authDomain: "summer-test-project.firebaseapp.com",
  databaseURL: "https://summer-test-project.firebaseio.com",
  projectId: "summer-test-project",
  storageBucket: "summer-test-project.appspot.com",
  messagingSenderId: "662511872543"
};
firebase.initializeApp(config);

ReactDOM.render(<App /> , document.getElementById('root'));