import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { FaBattleNet, FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <FaBattleNet></FaBattleNet>
          <span className="me-2">DREAM-LEARN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="me-2 text-white" to="/">
              Home
            </Link>
            <Link className="me-2 text-white" to="/courses">
              Courses
            </Link>
            <Link className="me-2 text-white" to="/blog">
              Blog
            </Link>
            <Link className="me-2 text-white" to="/FAQ">
              FAQ
            </Link>

            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Light</Button>
              <Button variant="secondary">Dark</Button>
            </ButtonGroup>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link className="text-white me-2" to="/login">
                    Login
                  </Link>
                  <Link className="text-white" to="/register">
                    Register
                  </Link>
                </>
              )}
            </>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
