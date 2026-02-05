import CommunityIcon from '@/assets/icons/community.svg?react';
import AssociationIcon from '@/assets/icons/association.svg?react';
import ClubsIcon from '@/assets/icons/clubs.svg?react';

const Community = () => {
  return (
    <section>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Manage your entire community <br /> in a single system
        </h2>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card icon={<CommunityIcon width={40} />} title="Membership Organisations" />
          <Card icon={<AssociationIcon width={40} />} title="National Associations" />
          <Card icon={<ClubsIcon width={40} />} title="Clubs And Groups" />
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title }) => (
  <div style={{ border: '1px solid #eee', padding: '20px', width: '250px', textAlign: 'center' }}>
    {icon}
    <h4 style={{ marginTop: '15px' }}>{title}</h4>
  </div>
);

export default Community;
