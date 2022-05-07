import React from "react";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  return (
    <div
      class="container sub-bg-success p-5 text-dark bg-opacity-25 rounded d-flex justify-content-center align-items-center mb-5"
      id="Subscribe"
    >
      <div>
        <h1>LET'S STAY IN TOUCH</h1>
        <p>Get updates on sales, specials and more </p>
        <input type="text" className="form-control" placeholder="Your Email" />
        <br />
        <button type="button" class="sub-btn-buy-now fw-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
