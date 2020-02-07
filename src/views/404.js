import React from "react";
import { Container, Button } from "shards-react";
import { Link } from "react-router-dom";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Not Found!</h3>
        <p>This page is not available. Please try other links!</p>
        <Link to="/"><Button pill>
          <i class="material-icons">vertical_split</i>
          Go Home</Button></Link>
      </div>
    </div>
  </Container>
);

export default Errors;
