import * as firebase from 'firebase';
require('firebase/firestore');

class FirebaseHelper {
    constructor() {
        // Initialize Firebase
        this.firebaseConfig = {
            apiKey: "AIzaSyARF6-F6aXhJ9qjj2HSP6QXqVGGyuQTbWQ",
            authDomain: "community-resource-planning.firebaseapp.com",
            databaseURL: "https://community-resource-planning.firebaseio.com",
            projectId: "community-resource-planning",
            storageBucket: "community-resource-planning.appspot.com",
            messagingSenderId: "1015940062577"
        };
    }
    plugin() {
        // console.log('Mount Firebase')
        if(!firebase.apps.length) {
            firebase.initializeApp(this.firebaseConfig)
        }
        
    }
    getFirebase() {
        return firebase;
    }
}
export default new FirebaseHelper();