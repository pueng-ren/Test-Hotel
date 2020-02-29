const app = require('@firebase/app');
require('@firebase/auth');
require('@firebase/firestore');

const firebase = app.firebase



var firebaseConfig = {
    apiKey: "AIzaSyAu2RTm5j8kfeNSD8WlnndhIFE06qPoH0I",
    authDomain: "hotel-9274b.firebaseapp.com",
    databaseURL: "https://hotel-9274b.firebaseio.com",
    projectId: "hotel-9274b",
    storageBucket: "hotel-9274b.appspot.com",
    messagingSenderId: "1003610560283",
    appId: "1:1003610560283:web:ba2f6c4d14fa3b5023a5be",
    measurementId: "G-M8W76BYXSQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore(); // We don't need this anymore because we create firestore in index.js
  
  export default firebase ;