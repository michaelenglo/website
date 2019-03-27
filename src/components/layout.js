/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import SideBar from './SideBar';


let windowSize = null;

try {
  windowSize = require('react-window-size');
} catch (e) {
 console.log(e);
}

const Layout = ({ children, windowWidth }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
          }}
        >
          <div style={{
            width: '200px',
            float: 'left',
            height: '100vh',
            display: windowWidth > 600 ? 'inherit' : 'none',
          }}
          >
            <SideBar />
          </div>
          <main style={{
            width: 'auto',
          }}
          >
            {children}
          </main>
          <footer />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Workaround for windowSize using window
export default typeof windowSize === 'function' ? windowSize(Layout) : Layout;
