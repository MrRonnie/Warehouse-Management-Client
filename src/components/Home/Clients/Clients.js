import React from "react";

import client1 from "../../../images/clients/client-1.jpg";
import client2 from "../../../images/clients/client-2.jpg";
import client3 from "../../../images/clients/client-3.jpg";
import Client from "../Client/Client";

const clients = [
  { id: 1, name: "Nora Olivia  ", img: client1 },
  { id: 2, name: "John Smith", img: client2 },
  { id: 3, name: "Evie Freya", img: client3 },
];
const Clients = () => {
  return (
    <div id="clients" className="container">
      <h2 className="text-warning fw-bold text-center mt-5">Happy Clients</h2>
      <div className="row ">
        {clients.map((client) => (
          <Client key={client.id} client={client}></Client>
        ))}
      </div>
    </div>
  );
};

export default Clients;
