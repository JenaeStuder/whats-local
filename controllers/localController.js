// const db = require("../models");
const db = mongoose.model("users");
//res.json(dbModel;

// connection setup for the storage service that will containt the media files. 


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("hit handler for find all");
    
    db
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Hit");
    db.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db
      .findOneAndUpdate(req.params.id, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addStorageItem: function(req, res) {
    console.log(req.body.data)
    // upload file
    // bucket.upload(JSON.stringify(req.body.file), (err, file) => {
    //   console.log(`Error: ${err}\nFile: ${file}`); 
    // })
       
      // call to database is made to insert the URL reference for the artist
        // db.Users
        //   .findOneAndUpdate({_id: req.params.id}, {$push:{media:{path:data}}})
        //   .then(dbModel => {
        //       console.log(dbModel)
        //       res.json(dbModel)})
        //   .catch(err => res.status(422).json(err))  
  }, 
  removeStorageItem: function(req, res) {
    db.findById({_id: req.params.id}, {$pull:{media:{path: req.body}}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  savedArtist: function(req, res) {  
  },
  updatePic: function(req, res) {
    console.log("update route");
    
    
    db.findOneAndUpdate(req.params.id, {profilePicture:req.body.path})
    .then(dbModel => {
      console.log(dbModel);
      
      res.json(dbModel)})
    .catch(err => console.log(err)
    );
  },
  test: function(req, res){
    console.log("Handler has been hit!", req.params.id, req.body.path);
  }
//res.status(422).json(err)
};