import css from "./Final.module.css";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

export default function Final() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1463);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1463);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={css.finalSection}>
      <Layout>
        <div className={css.finalSectionTitleTextWrapper}>
          <h2 className={css.finalTitle}>Find something you love.</h2>
          <p className={css.finalText}>
            {isMobile
              ? "Click below to browse our collection!"
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat."}
          </p>
        </div>
        {isMobile && <Button />}
        {!isMobile && (
          <>
            <button className={css.finalBtn}>
              <span>Customize Your Outfit</span>
              <svg width={23} height={10}>
                <use href="/sprite.svg#icon-btn-arrow" />
              </svg>
            </button>
            <div className={css.finalDescWrapper}>
              <div className={css.finalClockWrapper}>
                <svg width={11} height={11}>
                  <use href="/sprite.svg#icon-clock" />
                </svg>
                <p className={css.finalDescText}>Ships in 1-2 Days</p>
              </div>
              <picture>
                <source
                  srcSet="
                      ../images/cards.png    1x,
                      ../images/cards@2x.png 2x
                    "
                  width="243"
                  height="22"
                />
                <img
                  src="../images/cards.png"
                  alt="Cards image"
                  width="243"
                  height="22"
                />
              </picture>
            </div>
            <ul className={css.finalList}>
              <li className={css.finalItem}>
                <svg width={33} height={33}>
                  <use href="/sprite.svg#icon-final-car" />
                </svg>
                <p className={css.finalItemText}>
                  FREE Shipping on <br /> Orders over $200
                </p>
              </li>
              <li className={css.finalItem}>
                <svg width={33} height={33}>
                  <use href="/sprite.svg#icon-final-shield" />
                </svg>
                <p className={css.finalItemText}>
                  Over 500+ 5 Star
                  <br /> Reviews Online
                </p>
              </li>
              <li className={css.finalItem}>
                <svg width={33} height={33}>
                  <use href="/sprite.svg#icon-final-cart" />
                </svg>
                <p className={css.finalItemText}>
                  Made ethically
                  <br /> and responsibly.
                </p>
              </li>
            </ul>
          </>
        )}
      </Layout>
    </section>
  );
}
