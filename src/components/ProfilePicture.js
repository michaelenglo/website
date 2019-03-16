import React from 'react';
import ProfilePictureURL from '../images/profile-picture.png';

const styles = {
  image: {
    height: '150px',
    margin: 'auto',
    display: 'block',
    borderRadius: '106px',
    border: '4px solid #FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    marginTop: '50px',
    marginBottom: '20px',
  },
};

const ProfilePicture = () => (
  <React.Fragment>
    <img
      src={ProfilePictureURL}
      alt="face"
      style={styles.image}
    />
  </React.Fragment>
);

export default ProfilePicture;
