"use client";
import React, { useState } from "react";
import styles from "./CurrencyTools.module.scss";
import { currencyToolsData } from "@/data/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MyLoader from "../MyLoader/MyLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CurrencyTools = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      
    ],

  };

  return (
    <>
      <div className={styles.cTools}>
        <div className={styles.title}>
          <p className={styles.titleText}>POPULAR CURRENCY TOOLS</p>
          <h1 className={styles.xlText}>
            Set Up & Exchange Money From Your Cards In A Minute
          </h1>
        </div>

        <div className="CurrencyCarousel">
          <Slider {...settings}>
            {currencyToolsData.map((data) => (
              <div className="col" key={data.id}>
                <span className="conTitle">
                  <span className="iconWraps">
                    <span className="iconShadow"></span>
                    <Image
                      src={data.icon}
                      alt="h-icon"
                      width={50}
                      height={50}
                    />
                  </span>
                  <h1 className="xl">{data.title}</h1>
                </span>
                <p className="desc">{data.desc}</p>
                <Link href="/login" className="action">
                  {data.action}{" "}
                  <FontAwesomeIcon className="fIcon" icon={faAngleRight} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="loaderWrapper">
        <MyLoader />
      </div>
    </>
  );
};

export default CurrencyTools;
