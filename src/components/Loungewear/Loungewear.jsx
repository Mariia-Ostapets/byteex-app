import css from "./Loungewear.module.css";
import { useRef, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Loungewear() {
  const swiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const images = [
    {
      id: useId(),
      desc: "../images/benefits-desc.png",
      mob: "../images/benefits-mob.png",
      retina: "../images/benefits-desc@2x.png",
    },
    {
      id: useId(),
      desc: "../images/benefits-desc.png",
      mob: "../images/benefits-mob.png",
      retina: "../images/benefits-desc@2x.png",
    },
    {
      id: useId(),
      desc: "../images/benefits-desc.png",
      mob: "../images/benefits-mob.png",
      retina: "../images/benefits-desc@2x.png",
    },
    {
      id: useId(),
      desc: "../images/benefits-desc.png",
      mob: "../images/benefits-mob.png",
      retina: "../images/benefits-desc@2x.png",
    },
    {
      id: useId(),
      desc: "../images/benefits-desc.png",
      mob: "../images/benefits-mob.png",
      retina: "../images/benefits-desc@2x.png",
    },
  ];

  return (
    <div className={css.loungewearContainer}>
      <Swiper
        modules={[Navigation, Thumbs]}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiperBtnNext",
          prevEl: ".swiperBtnPrev",
        }}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        watchSlidesProgress={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="main-swiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <picture className={css.imgWrapper}>
              <source
                srcSet={`${image.retina} 2x, ${image.desc} 1x`}
                media="(min-width: 1464px)"
              />
              <source srcSet={image.mob} media="(max-width: 1463px)" />
              <img src={image.desc} alt="Gallery slide" />
            </picture>
            <p className={css.loungewearDescr}>White Robe</p>
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

      {/* <Swiper
          onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
          slidesPerView={5}
          spaceBetween={10}
          watchSlidesProgress
          watchSlidesVisibility={true}
          className="thumbs-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.desc} alt="Thumbnail" />
            </SwiperSlide>
          ))}
        </Swiper> */}
    </div>
  );
}
