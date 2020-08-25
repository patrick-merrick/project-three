import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
// import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
