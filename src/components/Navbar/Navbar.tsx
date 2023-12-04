'use client'
import styles from "./Navbar.module.scss";
import Logos from "@/brands/Logos/Logos";
import Translator from "@/helpers/Translator";
import React from "react";
import Navlinks from "./Navlinks/Navlinks";
import { usePathname } from "next/navigation";
import Hamburger from "@/brands/Hamburger/Hamburger";
import Image from "next/image";
import PopupCta from "./PopupCta/PopupCta";
import { store } from "@/hooks/store";



const Navbar = () => {
  const pathname = usePathname();
  const {toggleShowCTA } = store();
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/register'

  return (

    !isLoginPage && !isSignupPage &&
    <nav className={styles.navbar}>
      <Logos />

      <div className={styles.right}>
        <Navlinks/>
        <li className={styles.showcta}>
          <button onClick={toggleShowCTA}>
            <Image src="/add-user.png" width={16} height={16} alt="add-user" />
          </button>

          <PopupCta />
        </li>
        <Translator />
        <Hamburger/>
      </div>
    </nav>
  );
};

export default Navbar;
