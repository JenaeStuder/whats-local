const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// subdocument schema for the media files 
const MediaSchema = new Schema({path: {type: String}})

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  firstName:{
      type: String,
      trim: true,
  },
  lastName:{
      type: String,
      trim: true,
  },
  socialMediaHandles:{
      type: Map,
      of: String
  },
  profilePicture:{
    data: Buffer,
    contentType: String
  },
  media:[MediaSchema],
  // img1:{
  //   data: Buffer,
  //   contentType: String
  // },
  // img2:{
  //   data: Buffer,
  //   contentType: String
  // },
  // img3:{
  //   data: Buffer,
  //   contentType: String
  // },
  // vid1:{
  //   data: Buffer,
  //   contentType: String
  // },
  // vid2:{
  //   data: Buffer,
  //   contentType: String
  // },
  // vid3:{
  //   data: Buffer,
  //   contentType: String
  // },
  // audio1:{
  //   data: Buffer,
  //   contentType: String
  // },
  // audio2:{
  //   data: Buffer,
  //   contentType: String
  // },
  // audio3:{
  //   data: Buffer,
  //   contentType: String
  // },
  bio:{
    type: String
  },
 
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);
//const Media = mongoose.model("Media", MediaSchema);

// Export the User model
module.exports = User;