const db = require("../models");

// connection setup for the storage service that will containt the media files. 
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

// creating our strage reference 
const storageRef = firebase.storage().ref('media/' + file.name);

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addStorageItem: function(req, res) {
    // upload file
    const task = storageRef.put(req.file, req.id);
    // grab the media item URL 
    const mediaURL = task.on('state_changed', 
    null, 
    function(){
      console.log(error); 
    },
    function mediaUrl() {
      const url = task.getDownloadURL().then(data => {
        // call to database is made to insert the URL reference for the artist
        db.Users
          .findOneAndUpdate({_id: req.id}, {$push:{media:{path:data}}})
          .then(dbModel => {
              console.log(dbModel)
              res.json(dbModel)})
          .catch(err => res.status(422).json(err))  
          })
    })
  }, 
  removeStorageItem: function(req, res) {
    db.Users.findById({_id: req.id}, {$pull:{media:{path: req.body}}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  savedArtist: function(req, res) {
    
  } 

};