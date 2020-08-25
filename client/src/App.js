import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/SignIn/index";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/pages/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
