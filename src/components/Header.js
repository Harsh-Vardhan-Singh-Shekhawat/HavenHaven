import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["title-div"]}>
          <h1>HavenHaven</h1>
        </div>
        <div className={styles["header-li-container"]}>
          <ul className={styles["header-list"]}>
            <li className={styles["header-li-item"]}>Home</li>
            <li className={styles["header-li-item"]}>About</li>
            <li className={styles["header-li-item"]}>Services</li>
            <li className={styles["header-li-item"]}>Pricing</li>
          </ul>
        </div>
        <div className={styles['header-btn']}>
          <button className={styles['signin-btn']}>Sign In</button>
          <button className={styles['contact-btn']}>Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
