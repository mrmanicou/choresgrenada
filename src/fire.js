import firebase from 'firebase';

require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyAsyGwxiZTblJEhS3QsPv7PalymUhjgYcg',
  authDomain: 'choresgd.firebaseapp.com',
  databaseURL: 'https://choresgd.firebaseio.com',
  projectId: 'choresgd',
  storageBucket: 'choresgd.appspot.com',
  messagingSenderId: '872969766150',
};

// the root app just in case we need it
const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.firestore(); // the real-time database
export const auth = firebaseApp.auth(); // the firebase auth namespace
export const storageKey = 'CHORESEHR';
export const isAuthenticated = () => !!auth.currentUser || !!localStorage.getItem(storageKey);
