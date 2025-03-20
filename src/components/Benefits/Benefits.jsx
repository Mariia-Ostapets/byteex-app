import AsSeenIn from "../AsSeenIn/AsSeenIn";
import Layout from "../Layout/Layout";
import css from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={css.sectionBenefits}>
      <Layout>
        <AsSeenIn />
      </Layout>
    </section>
  );
}
