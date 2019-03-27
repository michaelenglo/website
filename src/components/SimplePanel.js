import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    backgroundColor: '#e8e8e8',
    borderRadius: '6px',
    position: 'relative',
    padding: '10px',
    margin: '20px 0',
  },
  date: {
    position: 'relative',
    top: '0',
    left: '0',
    color: '#ABA6A6',
    fontSize: '14px',
  },
  title: {
    textAlign: 'center',
  },
};

const SimplePanel = ({ date, title, paragraphs }) => (
  <div style={styles.container}>
    <div style={styles.date}>
      {date}
    </div>
    <h3 style={styles.title}>
      {title}
    </h3>
    {paragraphs && paragraphs.map(par => <p>{par}</p>)}
  </div>
);

SimplePanel.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.string.isRequired,
};

export default SimplePanel;
