import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = useCallback((id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed)
      axios
        .delete(`https://secure-wildwood-79541.herokuapp.com/item/${id}`)
        .then((res) => console.log(res));
  });

  useEffect(() => {
    axios
      .get("https://secure-wildwood-79541.herokuapp.com/item")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      });
  }, [handleDelete]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div style={{ minHeight: "80vh" }} className="container">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="mt-3">
            Manage <span className="text-warning">Inventory</span>
          </h3>
          <p>Showing all the items in inventory </p>
        </div>
        <div>
          <Link
            to="/additem"
            className="btn btn-warning aline-item-center mt-4"
          >
            Add Item
          </Link>
        </div>
      </div>

      <Table className="mt-4 mb-5 shadow rounded" striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.supplier}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td className="text-center">
                <Button
                  onClick={() => handleDelete(item._id)}
                  className="text-decoration-none text-center"
                  variant="link"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
