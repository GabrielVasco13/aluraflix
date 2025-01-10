import { useState } from "react";
import styles from "./Category.module.css";
import EditCard from "../EditCard";

export default function Category({ title, videos, color }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleSave = (updatedVideo) => {
    console.log("Updated video:", updatedVideo);
    // Add your save logic here
  };

  return (
    <div className={styles.categorySection}>
      <h2 className={styles.categoryTitle} style={{ backgroundColor: color }}>
        {title}
      </h2>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.card}>
            <img
              src={video.img}
              alt={video.title}
              className={styles.cardImage}
            />
            <div className={styles.cardActions}>
              <button className={styles.deleteButton}>DELETAR</button>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(video)}
              >
                EDITAR
              </button>
            </div>
          </div>
        ))}
      </div>
      <EditCard
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
