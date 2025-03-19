import css from "./Logo.module.css";

export default function Logo() {
  return (
    <a href="/" className={css.logoLink}>
      <svg width={200} height={35}>
        <use href="/sprite.svg#icon-logo"></use>
      </svg>
    </a>
  );
}
