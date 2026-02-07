import React from "react";

const Testimonials = () => {
  
  const personaImg = new URL('../assets/illustrations/testimonial-persona.svg', import.meta.url).href;
  const c1 = new URL('../assets/icons/company-1.svg', import.meta.url).href;
  const c2 = new URL('../assets/icons/company-2.svg', import.meta.url).href;
  const c3 = new URL('../assets/icons/company-3.svg', import.meta.url).href;

  return (
    <section style={{ backgroundColor: '#F5F7FA', padding: '64px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '78px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
    
          <img 
            src={personaImg} 
            alt="Tesla" 
            style={{ width: '100%', borderRadius: '8px' }} 
            onError={(e) => e.target.style.display='none'} 
          />
        </div>
        <div style={{ flex: '1.5', minWidth: '300px' }}>
          <p style={{ color: '#717171', lineHeight: '1.6', marginBottom: '16px' }}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare.
          </p>
          <h4 style={{ color: '#4CAF4F', fontSize: '20px', marginBottom: '8px' }}>Tim Smith</h4>
          <p style={{ color: '#89939E', marginBottom: '32px' }}>British Dragon Boat Racing Association</p>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            <img src={c1} alt="c1" style={{ height: '32px' }} />
            <img src={c2} alt="c2" style={{ height: '32px' }} />
            <img src={c3} alt="c3" style={{ height: '32px' }} />
            <a href="#" style={{ color: '#4CAF4F', fontWeight: 'bold', textDecoration: 'none' }}>Meet all customers →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;