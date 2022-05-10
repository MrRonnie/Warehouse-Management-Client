import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="container w-50 mx-auto border mt-5 mb-5 shadow border-light"
    >
      <h2 className="text-center text-warning mt-4 mb-3">
        Add Item Information
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 mt-2"
          placeholder="Item Title"
          type="text"
          required
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3"
          placeholder="Email"
          disabled
          {...register("email")}
        />
        <input
          className="mb-3"
          placeholder="Supplier"
          type="text"
          {...register("supplier")}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />

        <input
          className="mb-3"
          placeholder="$"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-3"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="w-50 mt-5 mx-auto btn btn-warning"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
