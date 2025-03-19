import css from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={css.bannerContainer}>
      <p className={css.banner}>
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
        SHIPPING on orders &#62; &#36;200 | easy 45 days return window
      </p>
    </div>
  );
}
