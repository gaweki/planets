import React from 'react';
import {
  Main,
  Container,
} from './Planets.styles';

import Header from '../../../components/header/Header';
import Tabs from '../tabs/Tabs';
import PlanetsList from './PlanetsList';

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Tabs />
        <PlanetsList />
      </Main>
    </Container>
  );
}

export default Home;
