import React from 'react';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav style={styles.nav}>
      <h3>Welcome, {user.name}!</h3>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center'
  }
};

export default Navbar;
