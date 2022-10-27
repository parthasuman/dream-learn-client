import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { providerLogin } = useContext(AuthContext);
  const { gitProviderLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const gitHubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    gitProviderLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit} className="mb-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        <Button onClick={handleGoogleSignIn} variant="outline-info">
          Login with Google
        </Button>
        <Button onClick={handleGithubSignIn} variant="outline-info">
          Login with GitHub
        </Button>

        <Form.Text className="text-success">
          Don't Have account please <Link to="/register">register</Link> Here.
        </Form.Text>
      </Container>
    </div>
  );
};

export default Login;
