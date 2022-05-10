import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);

  const handleDelete = useCallback((id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed)
      axios
        .delete(`http://localhost:5000/item/${id}`)
        .then((res) => console.log(res));
  });

  useEffect(() => {
    axios.get("http://localhost:5000/item").then((res) => {
      let data = res.data;
      let filterData = data.filter((z) => z.email === user.email);
      setItems(filterData);
      setLoading(false);
    });
  }, [handleDelete]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div style={{ minHeight: "80vh" }} className="container">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="mt-3">My Added Items</h3>
          <p>Showing all the items I added </p>
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

export default MyItems;
