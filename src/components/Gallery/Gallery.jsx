import css from "./Gallery.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader/Loader";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageCount, setImageCount] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1464) {
        setImageCount(22);
      } else {
        setImageCount(8);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pixabay.com/api/`, {
          params: {
            key: "45077635-6eb8c9a3980485254b901d63b",
            q: "women relax",
            per_page: imageCount,
          },
        });
        setImages(response.data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [imageCount]);

  return (
    <>
      {loading && <Loader />}
      <ul className={css.gallery}>
        {images.map((img) => (
          <li key={img.id} className={css.galleryItem}>
            <img
              src={img.webformatURL}
              alt={img.tags}
              className={css.galleryImg}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
