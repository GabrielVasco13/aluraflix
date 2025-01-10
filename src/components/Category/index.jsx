import styles from "./Category.module.css";

export default function Category({ title, videos, color }) {
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
              <button className={styles.editButton}>EDITAR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
