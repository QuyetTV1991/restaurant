import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" objectFit="contain" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            2056 Huynh Tan Phat Str. <br />
            Nha Be Town, Ho Chi Minh City <br /> (+84)3 213 213
          </p>
          <p className={styles.text}>
            2056 Huynh Tan Phat Str. <br />
            Nha Be Town, Ho Chi Minh City <br /> (+84)3 213 213
          </p>
          <p className={styles.text}>
            2056 Huynh Tan Phat Str. <br />
            Nha Be Town, Ho Chi Minh City <br /> (+84)3 213 213
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
