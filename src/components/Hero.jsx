import HeroImage from '@/assets/illustrations/hero.svg?react';

const Hero = () => {
  return (
    <section>
      <div className="container" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>
            Lessons and insights <br />
            <span style={{ color: '#4caf4f' }}>from 8 years</span>
          </h1>
          <p style={{ marginBottom: '20px' }}>
            Where to grow your business as a photographer or social media?
          </p>
          <button>Register</button>
        </div>

        <HeroImage width={300} />
      </div>
    </section>
  );
};

export default Hero;
