import React from 'react';
import logo from '../assets/icons/logo.svg';
import twitter from '../assets/icons/twitter.svg';
import insta from '../assets/icons/instagram.svg';
import youtube from '../assets/icons/youtube.svg';

const Footer = () => (
  <footer style={{ backgroundColor: '#263238', color: 'white', padding: '64px 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
      <div>
        <img src={logo} alt="logo" style={{ marginBottom: '40px', filter: 'brightness(0) invert(1)' }} />
        <p style={{ opacity: 0.8, lineHeight: '2' }}>Copyright © 2020 Nexcent ltd. <br/> All rights reserved</p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
          <img src={insta} alt="social" /> <img src={twitter} alt="social" /> <img src={youtube} alt="social" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '80px' }}>
        <div>
          <h4 style={{ marginBottom: '24px' }}>Company</h4>
          <ul style={{ listStyle: 'none', opacity: 0.8, lineHeight: '2.5' }}><li>About us</li><li>Blog</li><li>Contact us</li></ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '24px' }}>Support</h4>
          <ul style={{ listStyle: 'none', opacity: 0.8, lineHeight: '2.5' }}><li>Help center</li><li>Terms of service</li><li>Legal</li></ul>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '24px' }}>Stay up to date</h4>
        <input type="text" placeholder="Your email address" style={{ background: 'rgba(255,255,255,0.2)', border: 'none', padding: '12px', borderRadius: '8px', color: 'white', width: '250px' }} />
      </div>
    </div>
  </footer>
);
export default Footer;