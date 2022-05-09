import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const { id, name, img, description, price, quantity, supplier, stock } = item;
  const navigate = useNavigate();

  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <Card className="item-card text-center shadow rounded  mt-3 mx-auto ">
      <Card>
        <img className="w-100" src={img} alt="" />
        <Card.Title className="fs-6 fw-bold">{name}</Card.Title>
        <Card.Text className="text-primary fw-bold fs-4 my-0">
          Price: ${price}
        </Card.Text>
        <p className="fw-bold mt-3 fs-5">
          <small>{description}</small>
          <br />
          <small>Supplier: {supplier}</small>
          <br />
          <small>In Stock: {stock}</small>
          <br />
          <small>Quantity: {quantity}</small>
        </p>
        <Button
          onClick={() => navigateToItemDetail(id)}
          className="btn btn-warning w-75 mx-auto mb-3"
        >
          Update
        </Button>
      </Card>
    </Card>
  );
};

export default Item;
