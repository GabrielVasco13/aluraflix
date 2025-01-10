import { useState } from "react";
import styles from "./EditCard.module.css";

export default function EditCard({ video, isOpen, onClose, onClick, onSave }) {
  const [editData, setEditData] = useState({
    title: video?.title || "",
    category: video?.category || "",
    img: video?.img || "",
    videoUrl: video?.videoUrl || "",
    description: video?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit Video</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            placeholder="Titulo do vídeo"
          />
          <select
            name="category"
            value={editData.category}
            onChange={handleChange}
          >
            <option value="FRONT END">Front End</option>
            <option value="BACK END">Back End</option>
            <option value="MOBILE">Mobile</option>
          </select>
          <input
            type="url"
            name="img"
            value={editData.img}
            onChange={handleChange}
            placeholder="URL da imagem"
          />
          <input
            type="url"
            name="videoUrl"
            value={editData.videoUrl}
            onChange={handleChange}
            placeholder="URL do video"
          />
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            placeholder="Descrição do video"
          />
          <div className={styles.buttonContainer}>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
