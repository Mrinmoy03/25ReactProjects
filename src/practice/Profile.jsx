import React from 'react';
import { useAuth } from './AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div style={styles.profile}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

const styles = {
  profile: {
    marginTop: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial'
  }
};

export default Profile;
