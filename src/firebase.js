// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz1NDQPSOUPQYkpw9RavtfACrYUtYyXrk",
  authDomain: "upgradeapp-d2557.firebaseapp.com",
  projectId: "upgradeapp-d2557",
  storageBucket: "upgradeapp-d2557.firebasestorage.app",
  messagingSenderId: "837431416130",
  appId: "1:837431416130:web:4005600eaf37d8b52164db",
  measurementId: "G-CGXED30R1C",
  databaseURL: "https://upgradeapp-d2557-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { db, app, analytics, auth };