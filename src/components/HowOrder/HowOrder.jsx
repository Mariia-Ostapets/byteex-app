import css from "./HowOrder.module.css";
import { useRef, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";

export default function HowOrder() {
  const swiperRef = useRef(null);

  const steps = [
    {
      id: useId(),
      title: "You save.",
      text: "Browse our comfort sets and save 15% when you bundle.",
      icon: "icon-no-extras",
      backgroundColor: "#f9f0e6",
    },
    {
      id: useId(),
      title: "We ship.",
      text: "We ship your items within 1-2 days of receiving your order.",
      icon: "icon-ship",
      backgroundColor: "#f0eeef",
    },
    {
      id: useId(),
      title: "You enjoy!",
      text: "Wear hernest around the house, out on the town, or in bed.",
      icon: "icon-day-night",
      backgroundColor: "#f9f0e6",
    },
  ];

  return (
    <Layout>
      <section className={css.howOrderSection}>
        <h2 className={css.howOrderTitle}>Comfort made easy</h2>
        <div className={css.howOrderContainer}>
          <Swiper
            modules={[Navigation]}
            loop={true}
            breakpoints={{
              428: { spaceBetween: 30, slidesPerView: 1 },
              1464: { spaceBetween: 55, slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiperBtnNext",
              prevEl: ".swiperBtnPrev",
            }}
            watchSlidesProgress={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="main-swiper"
          >
            {steps.map((step) => (
              <SwiperSlide key={step.id}>
                <div
                  className={css.stepItem}
                  style={{ backgroundColor: step.backgroundColor }}
                >
                  <svg width={51} height={51}>
                    <use href={`/sprite.svg#${step.icon}`}></use>
                  </svg>
                  <h3 className={css.stepTitle}>{step.title}</h3>
                  <p className={css.stepText}>{step.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={css.swiperBtnPrev}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg className={css.swiperBtnIcon}>
              <use href="/sprite.svg#icon-slider-arrow-left"></use>
            </svg>
          </button>
          <button
            className={css.swiperBtnNext}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg className={css.swiperBtnIcon}>
              <use href="/sprite.svg#icon-slider-arrow-right"></use>
            </svg>
          </button>
        </div>
        <Button />
      </section>
    </Layout>
  );
}
