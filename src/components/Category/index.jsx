import { useState } from "react";
import styles from "./Category.module.css";
import EditCard from "../EditCard";
import { videoService } from "../../services/videoService";

export default function Category({ title, videos, color }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleDelete = async (videoId) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await videoService.deleteVideo(videoId);
        alert("Video deleted successfully!");
        window.location.reload(); // Refresh to show updated data
      } catch (error) {
        console.error("Error deleting video:", error);
        alert("Failed to delete video. Please try again.");
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
