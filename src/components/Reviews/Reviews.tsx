
'use client'
import React from "react";
import styles from "./Reviews.module.scss";
import { reviewData } from "@/data/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">OUR REVIEWS</p>
        <h1 className={styles.xlText}>
          More Than 18M+ Happy Customers Trust Our Services
        </h1>
      </div>

        <div className='reviewCarousel'>
        <Slider {...settings}>
          {reviewData.map((data) => (
            <span className='card' key={data.id}>
              <span className='row'>
                <span className='left'>
                  <Image src={data.avatar} alt="av" width={70} height={70} />
                  <span className='info'>
                    <h2 className='name'>{data.name}</h2>
                    <p className='office'>{data.office}</p>
                  </span>
                </span>

                <Image className='quote' src='/quote.png' alt='quote' width={50} height={50}/>
              </span>
              <p className='desc'>{data.desc}</p>
            </span>
          ))}
           </Slider>
        </div>

      </div>
  );
};

export default Reviews;
