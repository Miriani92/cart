import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = ({ count }) => {
  return (
    <div className={styles.header}>
      <h2>Cart</h2>
      <div>
        <FaCartPlus />
        <div className={styles.quantity}>{count}</div>
      </div>
    </div>
  );
};

export default Header;
