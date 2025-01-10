import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.label}>FRONT END</p>
        <h1>SEO com React</h1>
        <p>
          Eu tô aqui pra nesse vídeo dizer que a gente vai aprender a começar
          uma app inspirada no desenho Pokémon com Next.js e React, ver algumas
          dicas sobre performance e de quebra conhecer uma plataforma
          sensacional pra fazer deploy que é a Vercel.
        </p>
      </div>
      <div className={styles.videoOverlay}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c8mVlakBESE?si=2GhEdkssXnAu03lq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
}
