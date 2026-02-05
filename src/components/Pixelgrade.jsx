import PixelImage from '@/assets/illustrations/pixelgrade.svg?react';

const Pixelgrade = () => {
  return (
    <section>
      <div className="container" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <PixelImage width={300} />
        <div>
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p style={{ margin: '20px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Pixelgrade;
