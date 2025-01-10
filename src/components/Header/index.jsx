import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Aluraflix logo" className={styles.logo} />
        <nav className={styles.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.linkHomeActive : styles.linkHome
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/video"
            className={({ isActive }) =>
              isActive ? styles.linkVideoActive : styles.linkVideo
            }
          >
            Vídeo
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
