import React from 'react'
import { render } from 'react-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import PlayingScreen from './components/PlayingScreen'
import registerServiceWorker from './registerServiceWorker'

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHGdDK99IxKIhdAwazCXAIOS3WHnG0gJU",
  authDomain: "summer-test-project.firebaseapp.com",
  databaseURL: "https://summer-test-project.firebaseio.com",
  projectId: "summer-test-project",
  storageBucket: "summer-test-project.appspot.com",
  messagingSenderId: "662511872543"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
const firestore = firebase.firestore();
const settings = { 
  timestampsInSnapshots: true 
}
firestore.settings(settings)

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

// Setup react-redux so that connect HOC can be used
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Navbar}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/game" component={PlayingScreen}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)

render(<App />, document.getElementById('root'))
registerServiceWorker()
