import FooterImage from '@/assets/illustrations/footer-design.svg?react';

const FooterDesign = () => {
  return (
    <section>
      <div className="container" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <FooterImage width={300} />
        <div>
          <h2>How to design your site footer like we did</h2>
          <p style={{ margin: '20px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FooterDesign;
