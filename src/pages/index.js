import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import ProfilePicture from '../components/ProfilePicture';
import SimplePanel from '../components/SimplePanel';
import personalProjects from '../components/personalProjects';

const styles = {
  textCenter: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
        <div style={styles.textCenter}>Hey! My name is Michael Englo.</div>
        <div style={styles.textCenter}>
          I am just a normal dude who loves writing software.
          I go to UBC to study computers.
        </div>
        <br />
        <div style={styles.textCenter}>
        I do mostly Web stuff. But I have interests in AI, Machine Learning,
        </div>
        <div style={styles.textCenter}>
        NLP, Compilers, or pretty much Computer Science-cy topics, really.
        </div>
        <br />
        <div style={styles.textCenter}>
        When I am not around my computer, I like to mess around with any musical instruments that I can find. I also enjoy making Electronic Dance Music and Soccer. 
        </div>
        <br />
        <br />
        <div style={styles.textCenter}>Come check out my portfolio!</div>
        <div style={styles.center}>
          <SocialIcon bgColor="#ffffff00" fgColor="#000000" fontSize={12} network="github" url="https://github.com/michaelenglo" />
          <SocialIcon bgColor="#ffffff00" fgColor="#000000" fontSize={12} network="facebook" url="https://www.facebook.com/michaelenglo10" />
          <SocialIcon bgColor="#ffffff00" fgColor="#000000" fontSize={12} network="instagram" url="https://www.instagram.com/michaelenglo10" />
          <SocialIcon bgColor="#ffffff00" fgColor="#000000" fontSize={12} network="linkedin" url="http://linkedin.com/in/michaelenglo" />
          <SocialIcon bgColor="#ffffff00" fgColor="#000000" fontSize={12} network="medium" url="https://medium.com/@michaelenglo10" />
          <SocialIcon bgColor="#ffffff00" fgColor="#000000" fontSize={12} network="soundcloud" url="https://soundcloud.com/myglo" />
        </div>
      </div>

      <a name="projects" style={{
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
Here are some amazing projects that I have been able to work on

        </h5>
        <React.Fragment>
          { personalProjects.map(proj => <SimplePanel title={proj.title} date={proj.date} paragraphs={proj.paragraphs} />) }
        </React.Fragment>
      </a>
    </div>
  </Layout>
);

export default IndexPage;
