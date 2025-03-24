import css from "./Info.module.css";
import Layout from "../Layout/Layout";

export default function Info() {
  return (
    <section className={css.infoSection}>
      <Layout>
        <h2 className={css.infoTitle}>Our Total Green Impact</h2>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <svg className={css.infoIcon} width={42} height={42}>
              <use href="/sprite.svg#icon-co2" />
            </svg>
            <h3 className={css.infoSubTitle}>3,927 kg</h3>
            <p className={css.infoText}>of CO2 saved</p>
          </li>
          <li className={css.infoItem}>
            <svg className={css.infoIcon} width={42} height={42}>
              <use href="/sprite.svg#icon-h2o" />
            </svg>
            <h3 className={css.infoSubTitle}>2,546,167 days</h3>
            <p className={css.infoText}>of drinking water saved</p>
          </li>
          <li className={css.infoItem}>
            <svg width={42} height={42}>
              <use href="/sprite.svg#icon-lightning" />
            </svg>
            <h3 className={css.infoSubTitle}>7,321 kWh</h3>
            <p className={css.infoText}>of energy saved</p>
          </li>
        </ul>
      </Layout>
    </section>
  );
}
