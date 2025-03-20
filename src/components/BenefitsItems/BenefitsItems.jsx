import css from "./BenefitsItems.module.css";

export default function BenefitsItems() {
  return (
    <ul className={css.benefitsItemsList}>
      <li className={css.benefitsItems}>
        <svg width={42} height={42}>
          <use href="/sprite.svg#icon-cloud" />
        </svg>
        <div className={css.benefitsTitleDescrWrapper}>
          <h3 className={css.benefitsItemsTitle}>Ethically sourced.</h3>
          <p className={css.benefitsItemsDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.{" "}
          </p>
        </div>
      </li>
      <li className={css.benefitsItems}>
        <svg width={42} height={42}>
          <use href="/sprite.svg#icon-day-night" />
        </svg>
        <div className={css.benefitsTitleDescrWrapper}>
          <h3 className={css.benefitsItemsTitle}>Made for living in.</h3>
          <p className={css.benefitsItemsDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.{" "}
          </p>
        </div>
      </li>
      <li className={css.benefitsItems}>
        <svg width={42} height={42}>
          <use href="/sprite.svg#icon-leaf" />
        </svg>
        <div className={css.benefitsTitleDescrWrapper}>
          <h3 className={css.benefitsItemsTitle}>Responsibly made.</h3>
          <p className={css.benefitsItemsDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.{" "}
          </p>
        </div>
      </li>
      <li className={css.benefitsItems}>
        <svg width={42} height={42}>
          <use href="/sprite.svg#icon-comfort" />
        </svg>
        <div className={css.benefitsTitleDescrWrapper}>
          <h3 className={css.benefitsItemsTitle}>Unimaginably comfortable.</h3>
          <p className={css.benefitsItemsDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.{" "}
          </p>
        </div>
      </li>
    </ul>
  );
}
