import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="container w-50 mx-auto border mt-5 shadow border-light">
      <h2 className="text-primary text-center mt-3">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-2">
        Don't have an account?
        <Link
          to="/register"
          className="text-danger text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};
export default Login;
