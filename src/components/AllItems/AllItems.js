import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Home/Item/Item";
import Loading from "../Shared/Loading/Loading";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://secure-wildwood-79541.herokuapp.com/item")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div id="items" className="container mt-5">
      <div className="row">
        <h1 className="items-title mt-5 mb-5 text-warning fw-bold">
          Inventory
        </h1>
        <div className="items-container">
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
