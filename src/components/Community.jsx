import React from 'react';
import commIcon from '../assets/icons/community.svg';
import assocIcon from '../assets/icons/association.svg';
import clubIcon from '../assets/icons/clubs.svg';

const Community = () => {
  const data = [
    { icon: commIcon, title: "Membership Organisations" },
    { icon: assocIcon, title: "National Associations" },
    { icon: clubIcon, title: "Clubs And Groups" }
  ];

  return (
    <section className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', maxWidth: '540px', margin: '0 auto 40px' }}>Manage your entire community</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {data.map((item, i) => (
          <div key={i} style={{ padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderRadius: '8px' }}>
            <img src={item.icon} alt="icon" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '28px', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ color: 'var(--gray-text)', fontSize: '14px' }}>Our membership management software provides full automation...</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;