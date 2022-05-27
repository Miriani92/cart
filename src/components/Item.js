import React, { useState } from "react";
import styles from "./Item.module.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Item = ({ id, title, img, price, amount, remove, control }) => {
  const [count, setCount] = useState(4);

  const removeItem = (id) => {
    remove(id);
  };

  const controlCuantity = (arg) => {
    setCount((count) => {
      if (arg === "add") return (count += 1);
      else return (count -= 1);
    });
    control(count);
  };
  console.log(count);
  return (
    <main className={styles.item}>
      <div className={styles.wrapper}>
        <img src={img} />
        <div>
          <h2>{title}</h2>
          <h4 style={{ paddingTop: 10 }}>{price}</h4>
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>
      </div>
      <div className={styles.buttonswrapper}>
        <button onClick={() => controlCuantity("add")}>
          <FaArrowUp />
        </button>
        <h3 style={{ paddingRight: 18 }}>{amount}</h3>
        <button onClick={() => controlCuantity("sub")}>
          <FaArrowDown />
        </button>
      </div>
    </main>
  );
};

export default Item;
