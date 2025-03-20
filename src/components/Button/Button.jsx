import css from "./Button.module.css";

export default function Button() {
  return (
    <div className={css.btnContainer}>
      <button className={css.btn}>
        <span>Customize Your Outfit</span>
        <svg width={23} height={10}>
          <use href="/sprite.svg#icon-btn-arrow" />
        </svg>
      </button>
      <div className={css.starsWrapper}>
        <svg width={60} height={10}>
          <use href="/sprite.svg#icon-stars" />
        </svg>
        <p className={css.starsText}>One of 500+ 5 Star Reviews Online</p>
      </div>
    </div>
  );
}
