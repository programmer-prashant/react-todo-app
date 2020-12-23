import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDYXfMrtC0rr83-TYhESINs6W2LshBOMlM',
	authDomain: 'react-todo-pr.firebaseapp.com',
	projectId: 'react-todo-pr',
	storageBucket: 'react-todo-pr.appspot.com',
	messagingSenderId: '557345966108',
	appId: '1:557345966108:web:c65b4464d7e3c08a83f7d9',
	measurementId: 'G-024ZP9REKM',
});

const db = firebaseApp.firestore();
export default db;
