import Client1 from '@/assets/icons/client-1.svg?react';
import Client2 from '@/assets/icons/client-2.svg?react';
import Client3 from '@/assets/icons/client-3.svg?react';
import Client4 from '@/assets/icons/client-4.svg?react';
import Client5 from '@/assets/icons/client-5.svg?react';
import Client6 from '@/assets/icons/client-6.svg?react';

const Clients = () => {
  return (
    <section>
      <div className="container">

        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>
          Our Clients
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: '#777',
            marginBottom: '40px',
          }}
        >
          We have been working with some Fortune 500+ clients
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          <Client1 width={40} />
          <Client2 width={40} />
          <Client3 width={40} />
          <Client4 width={40} />
          <Client5 width={40} />
          <Client6 width={40} />
        </div>

      </div>
    </section>
  );
};

export default Clients;
