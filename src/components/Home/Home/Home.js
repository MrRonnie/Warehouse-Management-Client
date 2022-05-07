import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="">
      <Banner></Banner>
      <Clients></Clients>
    </div>
  );
};

export default Home;
