import React from "react";
import Dashboard from "./pages/Dashboard";
// import Form from "./components/Form/index";
// function SignIn() {
//   return <h3> Sign in! </h3>;
// }

function App() {
  let isLoggedIn = false;
  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <Profile />;
  }
}
export default App;
