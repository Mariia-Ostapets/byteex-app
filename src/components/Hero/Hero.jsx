import Layout from "../Layout/Layout";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <Layout>
      <section className={css.heroSection}>
        <h1 className={css.heroTitle}>Don't apologize for being comfortable</h1>
        <ul className={css.heroList}>
          <li className={css.heroItem}>
            <svg width={31} height={31}>
              <use href="/sprite.svg#icon-day-night" />
            </svg>
            <p className={css.heroDescription}>
              Beautiful, comfortable loungewear for day or night.
            </p>
          </li>
          <li className={css.heroItem}>
            <svg width={31} height={31}>
              <use href="/sprite.svg#icon-no-extras" />
            </svg>
            <p className={css.heroDescription}>
              No wasteful extras, like tags or plastic packaging.
            </p>
          </li>
          <li className={css.heroItem}>
            <svg width={31} height={31}>
              <use href="/sprite.svg#icon-comfort" />
            </svg>
            <p className={css.heroDescription}>
              Our signature fabric is incredibly comfortable — unlike anything
              you've ever felt.
            </p>
          </li>
        </ul>
        <button className={css.heroBtn}>
          <span>Customize Your Outfit</span>
          <svg width={23} height={10}>
            <use href="/sprite.svg#icon-btn-arrow" />
          </svg>
        </button>
        <div className={css.heroClientWrapper}>
          <div className={css.heroAvatarTitleWrapper}>
            <picture>
              <source
                srcSet="
                      ../images/hero-review.png    1x,
                      ../images/hero-review@2x.png 2x
                    "
                width="39"
                height="39"
              />
              <img
                src="../images/hero-review.png"
                alt="Client's avatar"
                width="39"
                height="39"
              />
            </picture>
            <div className={css.heroClientTitleWrapper}>
              <div className={css.heroStarsWrapper}>
                <svg width={60} height={10}>
                  <use href="/sprite.svg#icon-stars" />
                </svg>
                <p className={css.heroClientText}>
                  One of 500+ 5 Star Reviews Online
                </p>
              </div>
              <h3>Jane, S.</h3>
            </div>
          </div>
          <p className={css.heroClientDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo.
          </p>
        </div>
      </section>
    </Layout>
  );
}
