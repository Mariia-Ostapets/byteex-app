// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import css from "./Reviews.module.css";

export default function Reviews() {
  // const [reviews, setReviews] = useState([]);

  // const STRAPI_URL = "http://localhost:1337";

  // const getReviews = async () => {
  //   try {
  //     const response = await axios.get(`${STRAPI_URL}/api/articles?populate=*`);
  //     setReviews(response.data.data);
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getReviews();
  // }, []);

  return;
  //   <Swiper
  //     modules={[Navigation]}
  //     spaceBetween={20}
  //     slidesPerView={1}
  //     centeredSlides={true}
  //     navigation={true}
  //     pagination={{ clickable: true }}
  //     loop={true}
  //     breakpoints={{
  //       428: { slidesPerView: 1 },
  //       1464: { slidesPerView: 3 },
  //     }}
  //     style={{
  //       "--swiper-navigation-size": "10px",
  //       "--swiper-theme-color": "black",
  //       "--swiper-navigation-sides-offset": "10px",
  //     }}
  //   >
  //     {reviews.map((review) => {
  //       return (
  //         <SwiperSlide key={review.id}>
  //           <div className={css.reviewsContainer}>
  //             <div className={css.reviewContent}>
  //               <img
  //                 className={css.img}
  //                 src={`${STRAPI_URL}${review.cover.url}`}
  //                 alt={review.title}
  //                 width={39}
  //                 height={39}
  //               />
  //               <h3 className={css.author}>
  //                 {review.author?.name || "Anonymous"}
  //               </h3>
  //             </div>
  //             <p className={css.description}>{review.description}</p>
  //           </div>
  //         </SwiperSlide>
  //       );
  //     })}
  //   </Swiper>
  // );
}
