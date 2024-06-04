import { useState, useEffect } from "react";
import styles from "./Thumbs.module.css";

function Thumbs({ product }) {
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
  
  useEffect(() => setThumb(product.images[0]), [product.id]);

  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {product.images.map((each, index) => (
          <img
            key={index}
            className={styles["mini-img"]}
            src={each}
            alt={product.title}
            onClick={() => setThumb(each)}
          ></img>
        ))}
      </div>
      <img
        className={styles["big-img"]}
        id="big-img"
        src={thumb}
        alt="MacBook Pro 13'4"
      ></img>
    </section>
  );
}

export default Thumbs;
