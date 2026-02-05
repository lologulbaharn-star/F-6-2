import Logo from '@/assets/icons/logo.svg?react';

const Navbar = () => {
  return (
    <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0' }}>
      <Logo width={120} />
      <button>Register</button>
    </nav>
  );
};

export default Navbar;
