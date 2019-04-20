const firebase = require("firebase");
const db = require("../../../models");

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
export const fileUpload = () => {
  const uploader = document.getElementById("uploader");
  // grabbing the file
  const file = e.target.files[0];
  //finding the file type
  const mediaType = file.type.split("/");
  console.log(mediaType);
  // creating our strage reference
  const storageRef = firebase.storage().ref("photos/" + file.name); 
  // upload file
  const task = storageRef.put(file);
  //  update progress bar
  task.on("state_changed", 
  function progress(snapshot) {
    const percentageTransferred =
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    uploader.attr('value', percentageTransferred);
  },
  function error(error) {
    console.log(error);
    
  },
  function complete() {
    console.log("Upload is complete");
    // db update for user to add the media url
    storageRef.getDownloadURL().then(url => {
      // code for the database call to make the update
    })
    
  })  
}

export const fileDelete = (id) => {

}

