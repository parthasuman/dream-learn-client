import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CourseSummary = ({ tutorial }) => {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={tutorial.image_url} />
        <Card.Body>
          <Card.Text>
            <h4>Course Name: {tutorial.title}</h4>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>Course Structure: {tutorial.main_structure}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>Total Enroll: {tutorial.total_enroll}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>{tutorial.details}</Card.Text>
          <Button variant="primary">Download PDF</Button>
        </Card.Body>
        <Button variant="success">
          <Link className="text-white" to={`/tutorials/${tutorial._id}`}>
            Premium Purchase
          </Link>
        </Button>
      </Card>
    </Container>
  );
};

export default CourseSummary;
