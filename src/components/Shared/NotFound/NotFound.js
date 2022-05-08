import React from "react";
import error from "../../../images/Error.png";

const NotFound = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h2 className="text-warning fw-bold fs-1 text-center mt-5">
        I am <span className="text-primary">Robot</span> not a monkey!! You{" "}
        <span className="text-success">Monkey</span>
      </h2>
      <div className="w-50 mx-auto">
        <img className="w-100 " src={error} alt="" />
      </div>
      <h2 className="text-warning fw-bold fs-1 text-center mt-5">
        <span className="text-primary">Robot</span> is tired !! can't give you
        services <span className="text-danger">404!!</span>
      </h2>
      <h3 className="text-warning fs-2 text-center mt-5">
        <span className="text-success">Monkey</span> Love's Banana
      </h3>
    </div>
  );
};

export default NotFound;
