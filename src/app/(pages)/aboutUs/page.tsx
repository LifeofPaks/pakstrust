import React from "react";
import styles from "./about.module.scss";
import HeroAbout from "./HeroAbout";
import Companies from "@/brands/Logos/companies/Companies";
import AboutUs from "./components/AboutUs/AboutUs";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import CurrencyTools from "@/components/CurrencyTools/CurrencyTools";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import FunFacts from "./components/FunFacts/FunFacts";


const aboutUs = () => {
  return (
    <div className={styles.container}>
      <HeroAbout />
      <h1 className={styles.title}>
        Used By 100K+ Businesses Of All Shapes & Sizes
      </h1>
      <Companies />
      <AboutUs />
      <CurrencyTools />
      <ChooseUs />
      <FunFacts/>
      <ScrollTop />
    </div>
  );
};

export default aboutUs;
