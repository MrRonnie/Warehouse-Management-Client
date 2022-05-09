import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/item/${itemId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

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
          <Button
            // onClick={() => navigateToItemDetail(_id)}
            className="btn btn-warning align-bottom justify-end  w-50 mx-auto mb-5"
          >
            Delivered
          </Button>
        </Card>
      </Card>
    </div>
  );
};

export default ItemDetail;
