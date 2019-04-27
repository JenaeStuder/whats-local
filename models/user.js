const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// subdocument schema for the media files
const MediaSchema = new Schema({ 
  path: String,
  type: String
});
// subdocument schema for the saved artist of the user
//const SavedArtist = new Schema({ artists: String});

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  userName: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  socialMediaHandles: {
    type: Map,
    of: String
  },
  profilePicture: {type: String},
  media: [{type: String}],
  favoriteArtits: {type: String},
  bio: {
    type: String
  },
  zipCode: {
    type: String,
    required: true
  },
  userType: {
    type: Boolean,
    required: true
  },

  // `date` must be of type Date. The default value is the current date
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);