import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Project by Surabhi.
      </p>
      <div className={styles.links}>
        <p className={styles.link}>
            Email:surabhimhamane05@gmail.com
        </p>
        <p className={styles.link}>
            Contact:9326004793
        </p>
      </div>
    </footer>
  );
};

export default Footer;
