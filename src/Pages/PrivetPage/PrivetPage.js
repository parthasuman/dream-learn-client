import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const PrivetPage = () => {
  const tutorial = useLoaderData();
  console.log(tutorial);
  return (
    <div>
      <Container>
        <h1>Wellcome to Premium {tutorial.title} Course </h1>
        <p></p>
        <Card>
          <Card.Img variant="top" src={tutorial.image_url} />
          <Card.Body>
            <Card.Title>Course Structure: {tutorial.main_structure}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Total Enroll: {tutorial.total_enroll}
            </ListGroup.Item>
            <ListGroup.Item>Author Name: {tutorial.author.name}</ListGroup.Item>
            <ListGroup.Item>
              Course Rating: {tutorial.rating.number}
            </ListGroup.Item>
            <ListGroup.Item>
              Course Duration: {tutorial.author.total_time}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default PrivetPage;
