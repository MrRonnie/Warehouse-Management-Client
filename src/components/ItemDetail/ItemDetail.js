import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const location = useLocation().pathname.split("/")[2];

  const handleDeliver = () => {
    axios
      .put(`http://localhost:5000/item/delivered/${location}`)
      .then((data) => console.log(data.data));
  };

  const handleRestock = (e) => {
    e.preventDefault();
    let restockQuantity = e.target.restock.value;
    axios
      .put(
        `http://localhost:5000/item/restock/${location}?restock=${restockQuantity}`
      )
      .then((data) => console.log(data.data));
    e.target.reset();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/item/${location}`)
      .then((res) => setItem(res.data));
  }, [handleDeliver, handleRestock]);

  return (
    <div>
      <Card className=" text-center   shadow rounded mx-auto ">
        <Card>
          <h2 className="items-title mt-5 text-warning fw-bold">Item Detail</h2>
          <img className="w-50 mx-auto" src={item.img} alt="" />
          <Card.Title className="fs-5 mt-3 fw-bold">{item.name}</Card.Title>
          <h4>{item.description}</h4>
          <Card.Text className="text-success my-0 mt-2 fw-bold fs-3">
            Price: ${item.price}
          </Card.Text>
          <p className="fw-bold fs-5">
            <br />
            <small>Supplier: {item.supplier}</small>
            <br />
            <small>Quantity: {item.quantity}</small>
          </p>
          {parseInt(item.quantity) < 1 && (
            <div className="bg-danger text-white w-25 mx-auto mt-5 mb-5 ">
              Sold Out
            </div>
          )}
          <Button
            onClick={handleDeliver}
            className="btn btn-warning text-white  align-bottom justify-end  w-50 mx-auto mb-5"
          >
            Delivered
          </Button>
          <form
            className="d-flex aline-items-center justify-content-center gap-4 mb-4"
            onSubmit={handleRestock}
          >
            <input
              type="number"
              placeholder="Add Number"
              className="border-1 border-primary px-5 py-2 rounded"
              name="restock"
            ></input>
            <button
              className="btn btn-primary text-white px-6 py-3 mt-6 rounded"
              type="submit"
            >
              Restock
            </button>
          </form>
          <Link
            to="/manageinventory"
            className="btn btn-dark w-50 mx-auto text-white fs-5 mt-4 mb-3 "
          >
            Manage Inventory
          </Link>
        </Card>
      </Card>
    </div>
  );
};

export default ItemDetail;
