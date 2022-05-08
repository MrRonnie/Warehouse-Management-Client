import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h2 className="items-title mt-5 mb-5 text-warning fw-bold">
        Item Detail
      </h2>
      <h4> ID: {itemId}</h4>
    </div>
  );
};

export default ItemDetail;
