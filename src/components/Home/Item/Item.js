import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";

const Item = ({ item }) => {
  const { id, name, img, description, price, quantity, supplier, stock } = item;

  return (
    <Card className="item-card text-center shadow rounded  mt-3 mx-auto ">
      <Card>
        <img className="w-100" src={img} alt="" />
        <h6>Id: {id}</h6>
        <Card.Title className="fs-6 fw-bold">Name: {name}</Card.Title>
        <Card.Text className="text-primary fw-bold my-0">
          Price: ${price}
        </Card.Text>
        <p className="fw-bold">
          <small>Description: {description}</small>
          <br />
          <small>Supplier: {supplier}</small>
          <br />
          <small>In Stock: {stock}</small>
          <br />
          <small>Quantity: {quantity}</small>
        </p>
        <Button className="btn btn-warning w-75 mx-auto mb-3">Update</Button>
      </Card>
    </Card>
  );
};

export default Item;
