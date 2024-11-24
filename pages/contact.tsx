import React from 'react';
import Page from '../components/Page';
import { socialLinks } from '../data/homeData';
import HomeCard from '../components/HomeCard';

const Contact = () => (
  <Page title="Contact">
    <HomeCard index={0}>
      <section className="p-8">
        I can be reached for opportunities at my{' '}
        <a href={socialLinks.find((social) => social.name === 'LinkedIn').link}>
          <strong>LinkedIn</strong>
        </a>
        . Alternatively, you can send a message to emilykbonar at gmail dot com.
      </section>
    </HomeCard>
  </Page>
);

export default Contact;
