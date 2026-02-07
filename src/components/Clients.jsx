import React from 'react';
import './Clients.css';
import c1 from '../assets/icons/client-1.svg';
import c2 from '../assets/icons/client-2.svg';
import c3 from '../assets/icons/client-3.svg';
import c4 from '../assets/icons/client-4.svg';
import c5 from '../assets/icons/client-5.svg';
import c6 from '../assets/icons/client-6.svg';
import c7 from '../assets/icons/client-7.svg';

const Clients = () => {
  const logos = [c1, c2, c3, c4, c5, c6, c7];
  return (
    <section className="clients container">
      <div className="section-title">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="client-logos">
        {logos.map((logo, i) => <img key={i} src={logo} alt="client" />)}
      </div>
    </section>
  );
};
export default Clients;