import { useEffect, useState } from "react";

const useInventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://secure-wildwood-79541.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items];
};

export default useInventory;
