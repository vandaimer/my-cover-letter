import firebase from 'firebase/app';
import Rebase from 're-base';
import 'firebase/database';


const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

const realtime = firebase.database(app);
const storage = Rebase.createClass(realtime);

export { storage };
