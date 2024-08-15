// hel;o
//hellllllllllllllllllllllloooooooooooooooooooooo
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8mOqPmSWK2oYqDDuUn16xcZ7AQzg2WXw",
    authDomain: "chatpage-da545.firebaseapp.com",
    projectId: "chatpage-da545",
    storageBucket: "chatpage-da545.appspot.com",
    messagingSenderId: "604245000456",
    appId: "1:604245000456:web:ca4d5eeb2a22edee84acbd",
    measurementId: "G-Q75BBTJBN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);