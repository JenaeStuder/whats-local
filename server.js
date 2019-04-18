const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001; 

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
// Routes
app.use(routes);

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
//require("./config/passport")(passport);

// process.env.port is Heroku's port if you choose to deploy the app there
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT} !`));