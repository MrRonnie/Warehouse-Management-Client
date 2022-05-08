import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div id="items" className="container mt-5">
      <div className="row">
        <h1 className="items-title mt-5 mb-5 text-warning fw-bold">
          Inventory
        </h1>
        <div className="items-container">
          {items.slice(0, 6).map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>
      <div className="w-100 mx-auto text-end mt-3 mb-5">
        <Button className=" fs-5  mb-3" variant="outline-primary link">
          Manage Inventories
        </Button>
      </div>
    </div>
  );
};

export default Items;
