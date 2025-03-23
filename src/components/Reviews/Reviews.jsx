import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import css from "./Reviews.module.css";
import { Loader } from "../Loader/Loader";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=6"
        );
        setReviews(
          data.map((review, index) => ({
            id: review.id,
            name: review.name,
            text: review.body,
            rating: Math.floor(Math.random() * 2) + 4,
            avatar: `https://i.pravatar.cc/100?img=${index + 1}`,
          }))
        );
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={css.reviewsContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            428: { slidesPerView: 1 },
            1464: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiperBtnNext",
            prevEl: ".swiperBtnPrev",
          }}
          watchSlidesProgress={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          style={{
            "--swiper-theme-color": "black",
            height: "320px",
            marginBottom: "20px",
            maxWidth: "1258px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {reviews.map(({ id, name, text, avatar }) => (
            <SwiperSlide key={id}>
              <div className={css.reviewCard}>
                <div className={css.imgNameWrapper}>
                  <img src={avatar} alt={name} className={css.reviewAvatar} />
                  <div className={css.nameStarsWrapper}>
                    <svg width={60} height={10}>
                      <use href="/sprite.svg#icon-stars" />
                    </svg>
                    <h3 className={css.reviewName}>
                      {name.length > 15
                        ? name.slice(0, 15).trim() + "..."
                        : name}
                    </h3>
                  </div>
                </div>
                <p className={css.reviewText}>{text}</p>
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
    </>
  );
}
