import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./pages/Landing";
// import Books from "./pages/Books";
// import Splash from "/componets/Splash"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
