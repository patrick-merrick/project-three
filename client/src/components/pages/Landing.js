import React from "react";
import Nav from "../Nav";
import Jumbotron from "../Jumbotron";
import { Container } from "../Grid";
// import Membership from "../../src/Membership";
// import Signup from "../../src/components/Signup";
// import Login from "../src/components/Login";
function Landing() {
  return (
    <Container fluid>
      <Nav />
      <Jumbotron>
        <h1>DEVCONNECT</h1>
        <h4>A Community for M.E.R.N. Developers</h4>
      </Jumbotron>
    </Container>
  );
}

export default Landing;
