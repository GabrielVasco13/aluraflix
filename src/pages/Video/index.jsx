import { useState } from "react";
import styles from "./Video.module.css";
import { useNavigate } from "react-router-dom";
import { videoService } from "../../services/videoService";

export default function Video() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    img: "",
    videoUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await videoService.createVideo({
        ...formData,
        imageUrl: formData.img, // Ensure API compatibility
      });
      alert("Video added successfully!");
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error adding video:", error);
      alert("Failed to add video. Please try again.");
    }
  };

  const handleClear = () => {
    setFormData({
      title: "",
      category: "",
      img: "",
      videoUrl: "",
      description: "",
    });
  };

  return (
    <div className={styles.page}>
      <section className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Novo vídeo</h1>
          <p>Complete o formulario para criar um novo card de vídeo</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titulo de vídeo"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Selecione uma categoria</option>
            <option value="FRONT END">Front End</option>
            <option value="BACK END">Back End</option>
            <option value="MOBILE">Mobile</option>
          </select>

          <input
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="Thumbnail URL"
            required
          />

          <input
            type="url"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="Video URL"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Video Description"
            required
          />

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              Add Video
            </button>
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
            >
              Clear Form
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
