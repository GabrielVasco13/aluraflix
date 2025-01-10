import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Aluraflix logo" className={styles.logo} />
        <nav className={styles.navigation}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
