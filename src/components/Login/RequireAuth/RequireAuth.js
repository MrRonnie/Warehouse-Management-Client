import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <div style={{ minHeight: "80vh" }} className="text-center mt-5">
        <h3 className="text-danger">
          Your email is not verified <small>❌</small>
        </h3>
        <h3 className="text-success mt-3">
          {" "}
          Please verify your email address ✅
        </h3>
        <button
          className="btn btn-warning mt-5 "
          onClick={async () => {
            await sendEmailVerification();
            toast("Email Sent");
          }}
        >
          Send Verification Again ➡️
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
