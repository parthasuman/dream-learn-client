import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutorials-courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <h4>Our All Courses</h4>
          <div>
            {courses.map((course) => (
              <p key={course.id}>
                <Link to={`/course/${course.id}`}>{course.name}</Link>
              </p>
            ))}
          </div>
        </Col>
        <Col sm={8}>
          <div>
            {courses.map((course) => (
              <p key={course.id}>
                <Link className="fs-4 fw-bold fst-italic">{course.name}</Link>
                <Card.Img
                  className="mb-2"
                  variant="top"
                  src={course.photo_url}
                />
                <Button variant="success">
                  <Link className="text-white" to={`/course/${course.id}`}>
                    Course Details
                  </Link>
                </Button>
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
