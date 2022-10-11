// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

class PrivateSingleton {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyC3GOIx5hE6UPo4kaE-YYSsXYr8sYZfS-8",
            authDomain: "test-restaurant-70153.firebaseapp.com",
            databaseURL: "https://test-restaurant-70153-default-rtdb.firebaseio.com",
            projectId: "test-restaurant-70153",
            storageBucket: "test-restaurant-70153.appspot.com",
            messagingSenderId: "626148070845",
            appId: "1:626148070845:web:d3b6c88f6ca85cfa7daed4",
            measurementId: "G-T8153S06KM"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
          const database = getDatabase(app);
          const auth = getAuth(app);
    }
}
class Singleton {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new PrivateSingleton();
        }
        return Singleton.instance;
    }
}
module.exports = Singleton;