import styles from "./Footer.module.css";
import logo from "./logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Aluraflix logo" />
    </footer>
  );
}
