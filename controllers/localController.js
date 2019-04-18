const db = require("../models");
//res.json(dbModel);

// gcp storage 
const { Storage } = require("@google-cloud/storage");
const storage = new Storage();
const bucket = storage.bucket('gs://whatslocal-3cb63/');
const url = "https://whatslocal-3cb63.storage.googleapis.com/";


// connection setup for the storage service that will containt the media files. 


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
    console.log("Hit");
    db.User.create(req.body)
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
    console.log(req)
    // upload file
    bucket.upload(req.file).then(data => {
      console.log(data);
      console.log(url);
       
      // call to database is made to insert the URL reference for the artist
        // db.Users
        //   .findOneAndUpdate({_id: req.params.id}, {$push:{media:{path:data}}})
        //   .then(dbModel => {
        //       console.log(dbModel)
        //       res.json(dbModel)})
        //   .catch(err => res.status(422).json(err))  
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