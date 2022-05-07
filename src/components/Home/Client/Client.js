import React from "react";
import "./Client.css";

const Client = ({ client }) => {
  const { name, img } = client;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 mt-3 my-5 ">
      <div
        className="client-card shadow-lg rounded mt-3 mx-auto"
        style={{ width: "18rem" }}
      >
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            I owned so many great Headphones and earphones both high end Gadget
            Monkey is the best place for music lovers!!
            <br />
            <small className="">
              <span className="text-warning cursor-pointer ">See More ...</span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
