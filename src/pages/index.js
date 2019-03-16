import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import ProfilePicture from '../components/ProfilePicture';
import SimplePanel from '../components/SimplePanel';

const styles = {
  textCenter: {
    textAlign: 'center',
    fontSize: '14px',

  },
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div style={{
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Header />
      <div style={{
        margin: '10px',
      }}
      >
        <ProfilePicture />
        <div style={styles.textCenter}>Hi! My name is Michael Englo.</div>
        <div style={styles.textCenter}>
          I am just a normal dude who loves writing software for fun.
          I go to UBC to study computers.
        </div>
        <div style={styles.textCenter}>Come check out my portfolio!</div>
      </div>

      <div style={{
        margin: '10px',
        backgroundColor: '#F1F1F1',
        boxShadow: '0px 0px 25px #0000002b',
        borderRadius: '25px',
        padding: '30px 20px',
      }}
      >
        <h2 style={{
          fontWeight: '400',
          marginBottom: '0.45rem',
        }}
        >
Projects

        </h2>
        <h5 style={{
          fontWeight: '300',
        }}
        >
Here are some amazing project that I have been able to work on

        </h5>

        <SimplePanel date="June 2018" title="Prodapp" description={['Prodapp (stands for “productive app”) is a simple to-do mobile app that allows users to manage and break down a big goal into smaller chunks called subtasks. Each subtask is nested inside a task, and you can make the subtasks as infinitely deep as you want!', 'For this project, I experimented with React Native with Expo SDK. I also use Redux for app state management.']} />
        <SimplePanel date="June 2018" title="Prodapp" description={['Prodapp (stands for “productive app”) is a simple to-do mobile app that allows users to manage and break down a big goal into smaller chunks called subtasks. Each subtask is nested inside a task, and you can make the subtasks as infinitely deep as you want!', 'For this project, I experimented with React Native with Expo SDK. I also use Redux for app state management.']} />


      </div>
    </div>
  </Layout>
);

export default IndexPage;
