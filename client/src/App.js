import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Search from "./pages/Search";
import SignUp from "./pages/Signup";
import User from "./pages/User";
import Edit from "./pages/Edit";


// import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/user" component={User} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </div>
      </Router>
      </Provider>
  );
  }
}
  export default App;
