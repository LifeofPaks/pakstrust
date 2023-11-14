'use client'
import styles from "./Navbar.module.scss";
import Logos from "@/brands/Logos/Logos";
import Translator from "@/helpers/Translator";
import React from "react";
import Navlinks from "./Navlinks/Navlinks";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/register'

  return (

    !isLoginPage && !isSignupPage &&
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
