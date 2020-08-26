import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/SignIn/index";
import Profile from "./components/pages/Profile";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/pages/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profileCard" component={ProfileCard} />
      </div>
    </Router>
  );
}

export default App;
