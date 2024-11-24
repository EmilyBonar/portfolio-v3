import React from 'react';
import cards from '../data/homeData';
import HomeCard from '../components/HomeCard';
import Page from '../components/Page';

const Home = () => (
  <Page title="Home">
    {cards.map((cardData, index) => (
      <HomeCard index={index} key={index}>
        {cardData}
      </HomeCard>
    ))}
  </Page>
);

export default Home;
