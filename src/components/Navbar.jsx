import React from "react";
import logo from "../assets/icons/logo.svg";

const Navbar = () => (
  <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '84px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={logo} alt="Logo" style={{ height: '24px' }} />
      <span style={{ fontSize: '24px', fontWeight: '700' }}>Nexcent</span>
    </div>
    <ul className="hide-mobile" style={{ display: 'flex', listStyle: 'none', gap: '30px', color: 'var(--gray-900)' }}>
      <li>Home</li><li>Service</li><li>Feature</li><li>Product</li><li>Testimonial</li><li>FAQ</li>
    </ul>
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '500' }}>Login</button>
      <button className="btn-primary">Sign up</button>
    </div>
  </nav>
);

export default Navbar;