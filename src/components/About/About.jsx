import Layout from "../Layout/Layout";
import css from "./About.module.css";
import { useState, useEffect } from "react";

export default function About() {
  const [isDesc, setIsDesc] = useState(window.innerWidth >= 1464);

  useEffect(() => {
    const handleResize = () => {
      setIsDesc(window.innerWidth >= 1464);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={css.sectionAbout}>
      <Layout>
        <h2 className={css.sectionAboutTitle}>Be your best self.</h2>
        <div className={css.sectionAboutWrapper}>
          <div className={css.sectionAboutImgWrapper}>
            <picture>
              <source
                srcSet="
                ../images/about-desc.png    1x,
                      ../images/about-desc@2x.png 2x
              "
                media="(min-width: 1464px)"
                width="524"
                height="664"
              />
              <source
                srcSet="
                ../images/about-mob.png    1x,
              "
                media="(max-width: 1463px)"
                width="345"
                height="363"
              />
              <img src="../images/about-desc.png" alt="About image" />
            </picture>
          </div>
          <div>
            <p className={css.sectionAboutText}>
              Hi! My name’s [Insert Name], and I founded [Insert] in ____.{" "}
            </p>
            <p className={css.sectionAboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.{" "}
            </p>
            <p className={css.sectionAboutText}>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.{" "}
            </p>
            <p className={css.sectionAboutText}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.{" "}
            </p>
            <p className={css.sectionAboutText}>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.{" "}
            </p>
            <p className={css.sectionAboutText}>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.{" "}
            </p>
            <p className={css.sectionAboutText}>Cras mattis varius mollis.</p>

            {isDesc && (
              <button className={css.aboutBtn}>Customize Your Outfit</button>
            )}
          </div>
        </div>
      </Layout>
    </section>
  );
}
