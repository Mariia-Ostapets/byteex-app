import AsSeenIn from "../AsSeenIn/AsSeenIn";
import Layout from "../Layout/Layout";
import Loungewear from "../Loungewear/Loungewear";
import BenefitsItems from "../BenefitsItems/BenefitsItems";
import css from "./Benefits.module.css";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

export default function Benefits() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1463);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1463);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={css.sectionBenefits}>
      <Layout>
        <AsSeenIn />
        <h2 className={css.loungewearTitle}>Loungewear you can be proud of.</h2>
        <div className={css.benefitsContainer}>
          <Loungewear />
          <BenefitsItems />
        </div>
        {isMobile && <Button />}
      </Layout>
    </section>
  );
}
