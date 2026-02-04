import styles from './Community.module.css';

export default function Community() {
  return (
    <section className={styles.community}>
      <div className="container">
        <h2>Manage your entire community<br />in a single system</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Membership Organisations</h3>
            <p>Our membership management software provides full automation.</p>
          </div>

          <div className={styles.card}>
            <h3>National Associations</h3>
            <p>Manage members, payments and renewals.</p>
          </div>

          <div className={styles.card}>
            <h3>Clubs And Groups</h3>
            <p>Flexible group management for clubs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
