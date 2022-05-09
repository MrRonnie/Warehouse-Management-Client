import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-info w-50"></div>
        <p style={{ color: "gray" }} className="mt-2 px-2">
          or
        </p>
        <div style={{ height: "1px" }} className="bg-info w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-light border-info shadow-lg rounded mb-2 w-50 d-block mx-auto"
        >
          <img className="mb-1" src={google} alt="" />
          <span className="px-2"> Google Login</span>
        </button>
        <button className="btn btn-light border-info shadow-lg rounded mb-2 w-50 d-block mx-auto">
          <img className="mb-1" src={github} alt="" />
          <span className="px-2"> Github Login</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
