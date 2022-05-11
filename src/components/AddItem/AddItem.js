import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      email: user.email,
      name: e.target.name.value,
      supplier: e.target.supplier.value,
      description: e.target.description.value,
      price: parseInt(e.target.price.value),
      quantity: parseInt(e.target.quantity.value),
      img: e.target.img.value,
    };

    axios
      .post("https://secure-wildwood-79541.herokuapp.com/item", item)

      .then((res) => {
        const { data } = res;
        if (data) {
          toast("Your Item has added");
          e.target.reset();
        }
      });
  };

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="container w-50 mx-auto border mt-5 mb-5 shadow border-light"
    >
      <h2 className="text-center text-warning mt-4 mb-3">
        Add Item Information
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <input
          className="mb-3 mt-2"
          id="name"
          placeholder="Item Title"
          type="text"
          required
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3"
          id="email"
          placeholder="Email"
          value={user.email}
          disabled
          {...register("email")}
        />
        <input
          className="mb-3"
          id="supplier"
          placeholder="Supplier"
          type="text"
          required
          {...register("supplier")}
        />
        <textarea
          className="mb-3"
          id="description"
          placeholder="Description"
          {...register("description")}
        />

        <input
          className="mb-3"
          placeholder="$"
          id="number"
          type="number"
          required
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Quantity"
          id="quantity"
          type="number"
          required
          {...register("quantity")}
        />
        <input
          className="mb-3"
          id="img"
          placeholder="Photo URL"
          type="text"
          required
          {...register("img")}
        />
        <input
          className="w-50 mt-5 mx-auto btn btn-warning"
          type="submit"
          value="Add Item"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
