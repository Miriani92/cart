import React from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Cart</h2>
      <div>
        <FaCartPlus />
      </div>
    </div>
  );
};

export default Header;
