import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../Item/Item";
import "./Items.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://secure-wildwood-79541.herokuapp.com/item")
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
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
      <div className="w-100 text-end mt-4 mb-5">
        <Link
          to="/manageinventory"
          className="fs-5  mb-3 text-decoration-none "
        >
          Manage Inventory
          <FontAwesomeIcon
            className="mx-2 px-2 text-primary"
            icon={faArrowRight}
          />
        </Link>
      </div>
    </div>
  );
};

export default Items;
