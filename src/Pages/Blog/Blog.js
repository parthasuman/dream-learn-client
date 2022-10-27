import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. What is cors </Accordion.Header>
            <Accordion.Body>
              CORS is shorthand for Cross-Origin Resource Sharing. It is a
              mechanism to allow or restrict requested resources on a web server
              depend on where the HTTP request was initiated. This policy is
              used to secure a certain web server from access by other website
              or domain.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. Whay are you using firebase? What is the option do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience. <br></br>Implement Option.....<br></br>
              Firebase provides multiple ways of authenticating users. You can
              choose from email authentication, federated identity provider
              integration like Google, Facebook or Twitter or you can implement
              authentication on custom server.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. How does the privet route work?
            </Accordion.Header>
            <Accordion.Body>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              4.What is node? How does node work?
            </Accordion.Header>
            <Accordion.Body>
              Learn about Node.js, a JavaScript runtime for building server-side
              or desktop applications. Node.js is written in C, C++, and
              JavaScript, and it is built on the open-source V8 JavaScript
              engine which also powers JS in browsers such as Google Chrome. As
              V8 supports new features in JavaScript, they are incorporated into
              Node.<br></br>Node work....<br></br>It is a used as backend
              service where javascript works on the server-side of the
              application. This way javascript is used on both frontend and
              backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
