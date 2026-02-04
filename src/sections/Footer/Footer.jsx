import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <img src="/logo-white.svg" alt="Nexcent" />
          <p>Copyright © 2020 Nexcent</p>
        </div>

        <div>
          <h4>Company</h4>
          <a>About us</a>
          <a>Blog</a>
          <a>Contact us</a>
        </div>

        <div>
          <h4>Support</h4>
          <a>Help center</a>
          <a>Terms of service</a>
          <a>Legal</a>
        </div>
      </div>
    </footer>
  );
}
