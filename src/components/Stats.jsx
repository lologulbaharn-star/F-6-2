import React from "react";
import localBizImg from "../assets/illustrations/local-business.svg";

const Stats = () => {
  return (
    <section style={{ backgroundColor: 'var(--silver)', padding: '64px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '36px' }}>Helping a local <br /><span style={{ color: 'var(--primary)' }}>business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div className="stat-item"><h3>2,245,341</h3><p>Members</p></div>
          <div className="stat-item"><h3>46,328</h3><p>Clubs</p></div>
          <div className="stat-item"><h3>828,867</h3><p>Event Bookings</p></div>
          <div className="stat-item"><h3>1,926,436</h3><p>Payments</p></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;