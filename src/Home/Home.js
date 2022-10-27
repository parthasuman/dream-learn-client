import React from "react";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header>WellCome To DREAM LEARN</Card.Header>
        <Card.Body>
          <Card.Title>Get The Best One.</Card.Title>
          <Card.Text>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/y8J15P6y/online.jpg"
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          This is about Dream Learn. It the best online course in Bangladesh
          2022. Free online course are available on This platfrom. If you are
          looking for the best online course in Bangladesh 2022. We can
          ensurethat you are in the right place. We will provide the best
          qualityonline course free and premium both. The best free online
          courses in Bangladesh are available on website.
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Home;
