import styles from './Clients.module.css';

const logos = [
  '/clients/1.svg',
  '/clients/2.svg',
  '/clients/3.svg',
  '/clients/4.svg',
  '/clients/5.svg',
  '/clients/6.svg',
];

export default function Clients() {
  return (
    <section className={styles.clients}>
      <div className="container">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>

        <div className={styles.logos}>
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="client" />
          ))}
        </div>
      </div>
    </section>
  );
}
