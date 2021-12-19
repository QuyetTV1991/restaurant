import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured1.png",
    "/img/featured2.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    }
    if (direction === "right") {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrow left"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, i) => (
          <div className={styles.imageContainer} key={i}>
            <Image
              src={image}
              alt="Featured"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("right")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrow right"
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Featured;
