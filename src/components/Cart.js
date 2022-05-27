import React from "react";
import styles from "./Cart.module.css";
import Item from "./Item";
import { useState } from "react";

const Cart = ({ items, con }) => {
  const [filterd, setFilterd] = useState(items);
  const remove = (id) => {
    const filter = filterd.filter((item) => item.id !== id);
    setFilterd(filter);
  };
  const control = (arg) => {
    con(arg);
  };

  if (filterd.length < 1) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        There is no Item
      </h2>
    );
  }
  return (
    <div className={styles.cartwrapper}>
      {filterd.map((item) => {
        return (
          <Item
            key={item.id}
            {...item}
            remove={remove}
            control={control}
          ></Item>
        );
      })}
    </div>
  );
};

export default Cart;
