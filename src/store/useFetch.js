import { useState, useEffect } from "react";

const URL = `https://course-api.com/react-useReducer-cart-project`;

export const useFetch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.length > 0) {
        setLoading(false);
        setItems(data);
      } else {
        throw new Error("no items");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return { loading, items };
};
