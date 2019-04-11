import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Signup from "./pages/SignUp"
import User from "./pages/User";
import Navbar from './components/Navbar'

// import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/user" component={User} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
