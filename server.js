const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
// const users = require("./routes/api/users");
const routes = require("./routes");
const path = require("path");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// app.use(express.static('public'));

// app.get('*', (req, res) => res.sendFile(path.resolve('public', 'index.html')));

// Routes
//app.use("/api/users", users);

//DB Config

const db = require("./config/keys").mongoURI;

//Connect to MongoDB

// const db = process.env.MONGODB_URI || "mongodb://localhost/whatslocal";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use(routes);
//app.use("/api/users", users);
const PORT= process.env.PORT ||3001;

// process.env.port is Heroku's port if you choose to deploy the app there
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT} !`)
);
