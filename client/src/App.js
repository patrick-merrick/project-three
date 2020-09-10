import React from "react";

import SignIn from "./pages/SignIn";

import Profile from "./pages/Profile/index";
// import Dashboard from "./pages/Dashboard";
// import Form from "./components/Form/index";
// function SignIn() {
//   return <h3> Sign in! </h3>;
// }
function App() {
  let isLoggedIn = true;
  if (isLoggedIn) {
    return <Profile />;
  } else {
    return <SignIn />;
  }
}
export default App;

// function App() {
//   return <SignIn />;
// }
// export default App;
