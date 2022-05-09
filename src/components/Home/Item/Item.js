import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { _id, name, img, description, price, quantity, supplier, stock } =
    item;
  const navigate = useNavigate();

  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <Card className="item-card text-center   shadow rounded  mt-3 mx-auto ">
      <Card>
        <img className="w-100" src={img} alt="" />
        <Card.Title className="fs-6 mt-3 fw-bold">{name}</Card.Title>
        <Card.Text className="text-success fw-bold fs-4 my-0">
          Price: ${price}
        </Card.Text>
        <p className="fw-bold mt-3 fs-5">
          <small>{description}</small>
          <br />
          <small>Supplier: {supplier}</small>
          <br />
          <small>Quantity: {quantity}</small>
        </p>
        <Button
          onClick={() => navigateToItemDetail(_id)}
          className="btn btn-warning align-bottom justify-end  w-75 mx-auto mb-3"
        >
          Update
        </Button>
      </Card>
    </Card>
  );
};

export default Item;
