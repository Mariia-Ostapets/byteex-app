import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import css from "./AsSeenIn.module.css";
import { useId } from "react";

export default function AsSeenIn() {
  const images = [
    {
      id: useId(),
      desc: "../images/as-seen-in-1-desc.png",
      mob: "../images/as-seen-in-1-mob.png",
    },
    {
      id: useId(),
      desc: "../images/as-seen-in-2-desc.png",
      mob: "../images/as-seen-in-2-mob.png",
    },
    {
      id: useId(),
      desc: "../images/as-seen-in-3-desc.png",
      mob: "../images/as-seen-in-3-mob.png",
    },
    {
      id: useId(),
      desc: "../images/as-seen-in-4-desc.png",
      mob: "../images/as-seen-in-4-mob.png",
    },
    {
      id: useId(),
      desc: "../images/as-seen-in-5-desc.png",
      mob: "../images/as-seen-in-5-mob.png",
    },
  ];

  return (
    <>
      <h3 className={css.asSeenInTitle}>as seen in</h3>
      <div className={css.asSeenInContainer}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            428: { spaceBetween: 30, slidesPerView: 3 },
            1464: { spaceBetween: 55, slidesPerView: 5 },
          }}
          style={{
            "--swiper-theme-color": "black",
            height: "80px",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={img.id}>
              <div className={css.imgWrapper}>
                <picture>
                  <source srcSet={img.desc} media="(min-width: 1464px)" />
                  <img src={img.mob} alt={`as seen in ${index + 1}`} />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
