import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Nexcent" />
        </div>

        <nav className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Feature</a>
          <a href="#">Product</a>
          <a href="#">Testimonial</a>
          <a href="#">FAQ</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.login}>Login</button>
          <button className={styles.signup}>Sign up</button>
        </div>
      </div>
    </header>
  );
}
