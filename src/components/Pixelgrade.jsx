import React from "react";
import pixelgradeImg from "../assets/illustrations/pixelgrade.svg";

const Pixelgrade = () => {
  return (
    <section className="container" style={{ display: 'flex', alignItems: 'center', padding: '50px 0', gap: '50px' }}>
      <div style={{ flex: 1 }}>
        <img src={pixelgradeImg} alt="Pixelgrade" style={{ width: '100%' }} />
      </div>
      <div style={{ flex: 1.2 }}>
        <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>The unseen of spending three years at Pixelgrade</h2>
        <p style={{ color: 'var(--gray-text)', marginBottom: '32px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
          Sed accumsan quam vitae est varius fringilla.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
    </section>
  );
};

export default Pixelgrade;