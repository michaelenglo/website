import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
  <header style={{
    fontSize: '23px',
    fontWeight: '600',
    padding: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
  >
    <div style={{
      color: '#707070',
      fontSize: '30px',
    }}
    >
      Michael Englo
    </div>
    <div style={{
      backgroundColor: '#CFCFCF',
      height: '2px',
      width: '100%',
      marginTop: '20px',
    }}
    />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
