import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Splash from "./components/pages/Splash";
import SignIn from "./components/pages/SignIn";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path ="/" component ={Splash} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
