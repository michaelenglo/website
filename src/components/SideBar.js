import React from 'react';
import { Link } from 'gatsby';

const styles = {
  link: {
    fontFamily: '\'PT Mono\', monospace',
    color: 'white',
    textDecoration: 'none',
    margin: '10px 0',
  },
};

const SideBar = () => (
  <div style={{
    backgroundColor: '#2A2A2A',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    top: '0',
    left: '0',
    height: '99%',
    width: '200px',
    borderRadius: '7px',
    margin: '3px',
    position: 'fixed',
    flexDirection: 'column',
  }}
  >
    <div style={{
      marginTop: '100px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <Link to="/#home" style={styles.link}>Home</Link>
      <Link to="/#projects" style={styles.link}>Projects</Link>
    </div>
  </div>
);

export default SideBar;
