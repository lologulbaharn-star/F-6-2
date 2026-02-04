import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <h1>
            Lessons and insights <br />
            <span>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>

        <div className={styles.image}>
          <img src="/hero-illustration.svg" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
