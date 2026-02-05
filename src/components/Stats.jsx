const Stats = () => {
  return (
    <section style={{ background: '#f5f7fa' }}>
      <div className="container" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <Stat number="2,245,341" text="Members" />
        <Stat number="46,328" text="Clubs" />
        <Stat number="828,867" text="Event Bookings" />
        <Stat number="1,926,436" text="Payments" />
      </div>
    </section>
  );
};

const Stat = ({ number, text }) => (
  <div>
    <h3 style={{ color: '#4caf4f' }}>{number}</h3>
    <p>{text}</p>
  </div>
);

export default Stats;
