import React from "react";
import Nav from "../../src/components/Nav";
import Jumbotron from "../../src/components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

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
