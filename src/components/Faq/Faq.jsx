import css from "./Faq.module.css";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useState, useEffect } from "react";

export default function Faq() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1463);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1463);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      <section className={css.faqSection}>
        <h2 className={css.faqTitle}>Frequently asked questions.</h2>
        <Accordion
          className={css.accordionContainer}
          allowZeroExpanded={true}
          preExpanded={["a"]}
          allowMultipleExpanded={true}
        >
          <AccordionItem className={css.accordionItem} uuid="a">
            <AccordionItemHeading className={css.accordionItemHeading}>
              <AccordionItemButton className={css.accordionItemBtn}>
                lorem ipsum dolor sit amet
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={css.accordionItemPannel}>
              <p className={css.accordionItemText}>
                Our fabrics and garments are made in Portugal. We build strong
                relationships with our immediate suppliers and visit as often as
                possible.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={css.accordionItem}>
            <AccordionItemHeading className={css.accordionItemHeading}>
              <AccordionItemButton className={css.accordionItemBtn}>
                lorem ipsum dolor sit amet
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={css.accordionItemPannel}>
              <p className={css.accordionItemText}>
                Our fabrics and garments are made in Portugal. We build strong
                relationships with our immediate suppliers and visit as often as
                possible.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={css.accordionItem}>
            <AccordionItemHeading className={css.accordionItemHeading}>
              <AccordionItemButton className={css.accordionItemBtn}>
                lorem ipsum dolor sit amet
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={css.accordionItemPannel}>
              <p className={css.accordionItemText}>
                Our fabrics and garments are made in Portugal. We build strong
                relationships with our immediate suppliers and visit as often as
                possible.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={css.accordionItem}>
            <AccordionItemHeading className={css.accordionItemHeading}>
              <AccordionItemButton className={css.accordionItemBtn}>
                lorem ipsum dolor sit amet
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={css.accordionItemPannel}>
              <p className={css.accordionItemText}>
                Our fabrics and garments are made in Portugal. We build strong
                relationships with our immediate suppliers and visit as often as
                possible.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={css.accordionItem}>
            <AccordionItemHeading className={css.accordionItemHeading}>
              <AccordionItemButton className={css.accordionItemBtn}>
                lorem ipsum dolor sit amet
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={css.accordionItemPannel}>
              <p className={css.accordionItemText}>
                Our fabrics and garments are made in Portugal. We build strong
                relationships with our immediate suppliers and visit as often as
                possible.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        {isMobile && <Button />}
      </section>
    </Layout>
  );
}
