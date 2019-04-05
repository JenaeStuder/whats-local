// firsebase connection & dependency
const firebase = require('firebase');
// Set the configuration for your app
const app = firebase.initializeApp({
  apiKey: "AIzaSyDXuppBrOzR5S6jEG0-i1YtXNmVWA0mAhI",
  authDomain: "whatslocal-3cb63.firebaseapp.com",
  databaseURL: "https://whatslocal-3cb63.firebaseio.com",
  projectId: "whatslocal-3cb63",
  storageBucket: "whatslocal-3cb63.appspot.com",
  messagingSenderId: "451310734611"
});
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage("gs://whatslocal-3cb63");
// Create a storage reference from our storage service
const storageRef = storage.ref();


// Jquery code for retrieving the file from user upload 
$(() => {
    $().click(() => {
        const file = $('[type=file]').files[0];
    })
})
