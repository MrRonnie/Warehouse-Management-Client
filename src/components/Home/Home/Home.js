import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Items from "../Items/Items";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="">
      <Banner></Banner>
      <Items></Items>
      <Clients></Clients>
      <SubscribeForm></SubscribeForm>
    </div>
  );
};

export default Home;
