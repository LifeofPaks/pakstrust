import styles from "./Navbar.module.scss";
import Logos from "@/brands/Logos/Logos";
import Translator from "@/helpers/Translator";
import React from "react";
import Navlinks from "./Navlinks/Navlinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logos />

      <div className={styles.right}>
        <Navlinks/>
        <Translator />
      </div>
    </nav>
  );
};

export default Navbar;
