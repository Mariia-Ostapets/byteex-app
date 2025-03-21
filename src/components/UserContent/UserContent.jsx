import css from "./UserContent.module.css";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";

export default function UserContent() {
  return (
    <section className={css.sectionUserContent}>
      <Layout>
        <h2 className={css.userContentTitle}>What are our fans saying?</h2>
        <p className={css.userContentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </Layout>
      <Gallery />
      <Reviews />
      <Button />
    </section>
  );
}
