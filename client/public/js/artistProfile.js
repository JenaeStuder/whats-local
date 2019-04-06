const firebase = require('firebase');

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDXuppBrOzR5S6jEG0-i1YtXNmVWA0mAhI",
  authDomain: "whatslocal-3cb63.firebaseapp.com",
  databaseURL: "https://whatslocal-3cb63.firebaseio.com",
  projectId: "whatslocal-3cb63",
  storageBucket: "whatslocal-3cb63",
  messagingSenderId: "451310734611"
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
//const storage = firebase.storage("gs://whatslocal-3cb63");

// Jquery code for retrieving the file from user upload
$(() => {
  const uploader = $("#uploader");

  $("#fileButton").on("change", function(e) {
    console.log("uploaded");

    // grabbing the file
    const file = e.target.files[0];
    // creating our strage reference
    const storageRef = firebase.storage().ref("photos/" + file.name);
    // upload file
    const task = storageRef.put(file);
    //  update progress bar
    task.on("state_changed", function progress(snapshot) {
      const percentageTransferred =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentageTransferred;
    });
  });
});
