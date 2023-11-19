import React from "react";
import styles from "./Blog.module.scss";
import { blogData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className="tText">OUR BLOG</p>
        <h1 className={styles.xlText}>
          Keep Up To Date With Global Content From Our Trusted Team
        </h1>
      </div>

      <div className={styles.wrapper}>
        {blogData.map((data) => (
          <Link href='/' className={styles.card}>
            <Image src={data.image} alt="blog-img" width={450} height={300} />
            <div className={styles.content}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <Image
                    src="/calender.png"
                    alt="blog-img"
                    width={16}
                    height={16}
                  />
                  <p className={styles.text}>{data.date}</p>
                </div>

                <div className={styles.col}>
                  <Image
                    src="/comment.png"
                    alt="blog-img"
                    width={16}
                    height={16}
                  />
                  <p className={styles.text}>10+ Comments</p>
                </div>
              </div>
              <h1 className={styles.blogTitle}>{data.title}</h1>
            </div>
            <div className={styles.type}>{data.type}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
