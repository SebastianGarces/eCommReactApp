import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAsjQWeUL68bkD5tPUuiZ-DwSogvbjUO2k",
	authDomain: "ecommreactapp.firebaseapp.com",
	databaseURL: "https://ecommreactapp.firebaseio.com",
	projectId: "ecommreactapp",
	storageBucket: "ecommreactapp.appspot.com",
	messagingSenderId: "504645816319",
	appId: "1:504645816319:web:bdca22985c8a45f30c61ca",
	measurementId: "G-LDFY7YX3PF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
