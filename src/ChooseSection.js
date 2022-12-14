import React from "react";
import styles from "./ChooseSection.module.css";
import inner1 from "./components/Images/inner_01.jpg";
import inner2 from "./components/Images/inner_02.jpg";
import inner3 from "./components/Images/inner_06.jpg";
import inner4 from "./components/Images/inner_04.jpg";
import inner5 from "./components/Images/inner_05.jpg";

const ChooseSection = () => {
  return (
    <section className={styles["choose-section"]}>
      <div className={styles["choose-sec-container"]}>
        <div className={styles["choose-cont-intro"]}>
          <div className={styles["color-text"]}>
            <span className={styles["span-box"]}></span>
            <span className={styles["span-box-2"]}>COMFORTABLE LIVING</span>
          </div>
          <div>
            <h1 className={styles["comf-heading"]}>
              For Those Who Know To <i>Choose</i>
            </h1>
          </div>
        </div>
        <div className={styles["sub-div"]}>
          <img className={styles["inner-img"]} src={inner1} alt="inner1"></img>
          <div className={styles["inner-img-details"]}>
            <h2>One 1/2 Bedroom</h2>
            <p className={styles["para-font"]}>
              FROM 50 m<sup>2</sup>
            </p>
          </div>
        </div>
        <div className={styles["sub-div"]}>
          <img className={styles["inner-img"]} src={inner2} alt="inner2"></img>
          <div className={styles["inner-img-details"]}>
            <h1>Two 1/2 Bedroom</h1>
            <p className={styles["para-font"]}>
              FROM 60 m<sup>2</sup>
            </p>
          </div>
        </div>
        <div className={styles["sub-div"]}>
          <img className={styles["inner-img"]} src={inner3} alt="inner3"></img>
          <div className={styles["inner-img-details"]}>
            <h1>Two & half Bedroom</h1>
            <p className={styles["para-font"]}>
              FROM 65 m<sup>2</sup>
            </p>
          </div>
        </div>
        <div className={styles["sub-div"]}>
          <img className={styles["inner-img"]} src={inner4} alt="inner4"></img>
          <div className={styles["inner-img-details"]}>
            <h2>Three Bedroom</h2>
            <p className={styles["para-font"]}>
              FROM 75 m<sup>2</sup>
            </p>
          </div>
        </div>
        <div className={styles["sub-div"]}>
          <img className={styles["inner-img"]} src={inner5} alt="inner5"></img>
          <div className={styles["inner-img-details"]}>
            <h2>Duplex</h2>
            <p className={styles["para-font"]}>
              FROM 85 m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
