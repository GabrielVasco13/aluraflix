import Banner from "../../components/Banner";
import Category from "../../components/Category";
import styles from "./Home.module.css";
import categories from "../../db/db.json";
import { useEffect, useState } from "react";
import { videoService } from "../../services/videoService";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await videoService.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const filterVideosByCategory = (categoryName) => {
    return videos.filter((video) => video.category === categoryName);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Banner />
      <div className={styles.container}>
        {categories.categories.map((category) => (
          <Category
            key={category.id}
            title={category.name}
            videos={filterVideosByCategory(category.name)}
            color={category.color}
          />
        ))}
      </div>
    </>
  );
}
