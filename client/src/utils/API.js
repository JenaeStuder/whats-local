import axios from "axios";

// Initialize Firebase
  // const config = {
  //     apiKey: "AIzaSyDXuppBrOzR5S6jEG0-i1YtXNmVWA0mAhI",
  //     authDomain: "whatslocal-3cb63.firebaseapp.com",
  //     databaseURL: "https://whatslocal-3cb63.firebaseio.com",
  //     projectId: "whatslocal-3cb63",
  //     storageBucket: "whatslocal-3cb63",
  //     messagingSenderId: "451310734611"
  // };
  // firebase.initializeApp(config);



export default {
  // submit user/artist
  submitArtist: function(artistData) {
    console.log("api"); 
    return axios.post("/api/artists", artistData);
  },
  // add media uploads
  addMedia: function(media) {
    console.log(media)
    // creating our strage reference 
    // const storageRef = firebase.storage().ref('media/' + media.name);
    // upload file
    // const task = storageRef.put(media, null, null, () => {
    //   console.log("Upload Complete!");
      
    // });
    //return axios.put("/api/artists/media/op", media);
  },
  // update user profile pic
  updateProfilePic: function(media) {
    return axios.put("/api/artists/profile/pic/" + media.id, media);
  }
};
