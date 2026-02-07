import React from 'react';
// جرب تغيير هذه السطر تحديداً
import heroImg from '../assets/illustrations/hero.svg'; 

const Hero = () => {
  return (
    <section style={{ backgroundColor: '#F5F7FA', padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '48px', color: '#4D4D4D' }}>
            Lessons and insights <br />
            <span style={{ color: '#4CAF4F' }}>from 8 years</span>
          </h1>
          <p style={{ color: '#717171', margin: '20px 0' }}>Where to grow your business as a photographer: site or social media?</p>
          <button style={{ backgroundColor: '#4CAF4F', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Register</button>
        </div>
        <img src={heroImg} alt="Hero" style={{ width: '100%', maxWidth: '400px' }} />
      </div>
    </section>
  );
};

export default Hero;