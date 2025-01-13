import { useEffect, useState } from "react";
import styles from "./Category.module.css";
import EditCard from "../EditCard";
import { videoService } from "../../services/videoService";

export default function Category({ title, videos, color }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [video, setVideo] = useState([]);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setVideo(video);
  }, [video]);

  const handleDelete = async (videoId) => {
    if (!videoId) {
      alert("Invalid video ID");
      return;
    }

    try {
      if (window.confirm("Tem certeza?")) {
        await videoService.deleteVideo(videoId);

        window.location.reload();
      }
    } catch (error) {
      console.error("Delete failed:", error);
      if (error.message.includes("not found")) {
        alert("This video may have been already deleted");
      } else {
        alert(`Failed to delete video: ${error.message}`);
      }
    }
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
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(video.id)}
              >
                DELETAR
              </button>
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
      />
    </div>
  );
}
